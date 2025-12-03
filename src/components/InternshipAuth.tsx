import React, { useState } from 'react';
import { Search, Download, FileText, CheckCircle, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  referenceId: z.string().min(1, {
    message: "Reference ID is required",
  })
});

type InternshipData = {
  id: string;
  created_at: string | null;
  reference_id: string;
  full_name: string;
  position: string;
  uucm_number: string | null;
  report_url: string | null;
};

const InternshipAuth = () => {
  const [internshipData, setInternshipData] = useState<InternshipData | null>(null);
  const [loading, setLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referenceId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('internships')
        .select('*')
        .eq('reference_id', values.referenceId)
        .single();
      
      if (error) {
        throw error;
      }
      
      if (!data) {
        toast({
          title: "Not Found",
          description: "No internship record found with this reference ID.",
          variant: "destructive",
        });
        setInternshipData(null);
        return;
      }
      
      setInternshipData(data);
    } catch (error) {
      console.error('Error fetching internship data:', error);
      toast({
        title: "Error",
        description: "Failed to retrieve internship details. Please try again.",
        variant: "destructive",
      });
      setInternshipData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!internshipData?.report_url) {
      toast({
        title: "Error",
        description: "No report available for download.",
        variant: "destructive",
      });
      return;
    }
    
    setDownloadLoading(true);
    try {
      const link = document.createElement("a");
      link.href = internshipData.report_url;
      link.setAttribute("download", "");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Success",
        description: "Report download started.",
      });
    } catch (error) {
      console.error('Error downloading report:', error);
      toast({
        title: "Error",
        description: "Failed to download report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDownloadLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto font-sans">
      <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden relative">
        <div className="h-2 w-full bg-gradient-to-r from-grocery-primary to-orange-600"></div>
        <div className="p-6 md:p-8">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Reference ID</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="e.g., GW-INT-2023-0001"
                    {...form.register("referenceId")}
                    className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-grocery-primary transition-all text-slate-800 placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-grocery-primary hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>Checking...</span>
                    </>
                  ) : (
                    <>
                      <Search size={20} />
                      <span>Verify</span>
                    </>
                  )}
                </button>
              </div>
              {form.formState.errors.referenceId && (
                <div className="flex items-center gap-2 text-red-500 text-sm mt-2 ml-1">
                  <AlertCircle size={14} />
                  <span>{form.formState.errors.referenceId.message}</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>

      {internshipData && (
        <div className="mt-8 bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-orange-50 p-6 border-b border-orange-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white text-grocery-primary rounded-full flex items-center justify-center shadow-sm border border-orange-100">
                <CheckCircle size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Verified Successfully</h3>
                <p className="text-orange-600/80 text-sm font-medium">Record found in database</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-white text-orange-700 text-xs font-bold uppercase tracking-wider rounded-full border border-orange-200 shadow-sm">
              Active
            </span>
          </div>
          
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</p>
              <p className="text-lg font-semibold text-slate-800">{internshipData.full_name}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reference ID</p>
              <p className="text-lg font-mono font-medium text-slate-700 bg-slate-100 inline-block px-2 rounded">{internshipData.reference_id}</p>
            </div>
            <div className="space-y-1 md:col-span-2">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Internship Position</p>
              <p className="text-lg font-medium text-slate-800">{internshipData.position}</p>
            </div>
            {internshipData.uucm_number && (
              <div className="space-y-1 md:col-span-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">UUCM Number</p>
                <p className="text-lg font-medium text-slate-800">{internshipData.uucm_number}</p>
              </div>
            )}
          </div>

          {internshipData.report_url && (
            <div className="p-4 bg-slate-50 border-t border-slate-100">
              <button 
                onClick={handleDownload}
                disabled={downloadLoading}
                className="w-full bg-white border-2 border-slate-200 hover:border-grocery-primary hover:text-grocery-primary text-slate-600 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                {downloadLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <FileText size={18} className="group-hover:text-grocery-primary" />
                    <span>Download Report</span>
                    <Download size={18} className="ml-auto opacity-40 group-hover:opacity-100 text-grocery-primary" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InternshipAuth;