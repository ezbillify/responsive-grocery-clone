
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Search, Download, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
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
  reference_id: string;
  full_name: string;
  uucm_number: string | null;
  position: string;
  report_url: string | null;
}

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
    } finally {
      setLoading(false);
    }
  };

  const downloadReport = async () => {
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
      // Extract the actual path from the URL if needed
      const filePath = internshipData.report_url.startsWith('internship_reports/') 
        ? internshipData.report_url
        : `internship_reports/${internshipData.report_url}`;
      
      // Use the downloadPublicUrl method which works better for public buckets
      const { data, error } = await supabase.storage
        .from('internship_reports')
        .download(filePath);
      
      if (error) {
        console.error("Download error details:", error);
        throw error;
      }
      
      if (data) {
        // Create a blob URL from the file
        const url = URL.createObjectURL(data);
        // Create a download link and click it
        const a = document.createElement('a');
        a.href = url;
        a.download = `${internshipData.full_name}_report.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        // Clean up the blob URL
        URL.revokeObjectURL(url);
        
        toast({
          title: "Success",
          description: "Report download started.",
        });
      } else {
        throw new Error("Failed to download file");
      }
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
    <div className="w-full max-w-xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="referenceId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your Reference ID</FormLabel>
                <FormControl>
                  <div className="flex gap-2">
                    <Input placeholder="e.g., GW-INT-2023-0001" {...field} />
                    <Button type="submit" disabled={loading}>
                      {loading ? "Searching..." : <Search className="h-4 w-4" />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>

      {internshipData && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Internship Details</CardTitle>
            <CardDescription>Certificate verification for {internshipData.full_name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                <p className="text-base">{internshipData.full_name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Reference ID</p>
                <p className="text-base">{internshipData.reference_id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Position</p>
                <p className="text-base">{internshipData.position}</p>
              </div>
              {internshipData.uucm_number && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">UUCM Number</p>
                  <p className="text-base">{internshipData.uucm_number}</p>
                </div>
              )}
            </div>
          </CardContent>
          {internshipData.report_url && (
            <CardFooter>
              <Button 
                onClick={downloadReport} 
                variant="outline" 
                className="w-full"
                disabled={downloadLoading}
              >
                <FileText className="mr-2 h-4 w-4" />
                <span>{downloadLoading ? "Downloading..." : "Download Report"}</span>
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          )}
        </Card>
      )}
    </div>
  );
};

export default InternshipAuth;
