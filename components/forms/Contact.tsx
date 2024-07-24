"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/validations";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { toast } from "../ui/use-toast";
import { Textarea } from "../ui/textarea";
import { addContact } from "@/lib/actions/contact.action";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pathname = usePathname();

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      typeOfService: "",
      contactNumber: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    try {
      // Do something with the form values.
      setIsSubmitting(true);
      await addContact({
        fullName: values.fullName,
        email: values.email,
        contactNumber: values.contactNumber,
        message: values.message,
        typeOfService: values.typeOfService,
        path: pathname,
      });

      const templateParams = {
        fullName: values.fullName,
        email: values.email,
        contactNumber: values.contactNumber,
        message: values.message,
        typeOfService: values.typeOfService,
      };
      await emailjs.send(
        "service_strlo89", // Replace with your EmailJS service ID
        "template_7bfrfe4", // Replace with your EmailJS template ID
        templateParams,
        "user_4DxnHbW519nezT1DFNAOA" // Replace with your EmailJS user ID
      );

      console.log(values);
      toast({
        variant: "default",
        title: "Submitted",
        description: "Message has been submitted. Thank you!",
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: "default",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      throw error;
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
        // 3. Clear the form after submitting.
        form.reset();
        // toast({
        //   variant: "default",
        //   title: "Submitted",
        //   description: "Message has been submitted. Thank you!",
        // });
      }, 1000);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Full Name <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  {...field}
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Enter your full name
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Email Address <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  {...field}
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Enter your email address
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="typeOfService"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col ">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Type of Service <span className="text-primary-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="cursor-pointer bg-light-900">
                  <SelectItem value="machineries">Machineries</SelectItem>
                  <SelectItem value="genuineSpareParts">
                    Genuine Spare Parts
                  </SelectItem>
                  <SelectItem value="preventiveMaintenance">
                    Preventive Maintenance
                  </SelectItem>
                  <SelectItem value="performanceUpgrade">
                    Performance Upgrade
                  </SelectItem>
                  <SelectItem value="conversionOverhauling">
                    Conversion/Overhauling
                  </SelectItem>
                  <SelectItem value="training">
                    Maintenance and Operators Training
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Select your the type of services
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNumber"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                ContactNumber <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  {...field}
                  className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Enter your contact number
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Message <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Tell us more information.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center">
          <Button
            type="submit"
            className="primary-gradient w-[200px] !text-light-900 "
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Contact;
