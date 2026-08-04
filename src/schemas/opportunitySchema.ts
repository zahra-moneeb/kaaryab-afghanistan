import { z } from "zod";

export const opportunitySchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  company: z
    .string()
    .min(2, "Company name is required"),

  opportunityType: z
    .string()
    .min(1, "Please select an opportunity type"),

  category: z
    .string()
    .min(1, "Please select a category"),

  type: z
    .string()
    .min(1, "Please select a type"),

  location: z
    .string()
    .min(2, "Location is required"),

  salary: z
    .string()
    .min(1, "Salary is required"),

  experience: z
    .string()
    .min(1, "Experience is required"),

  description: z
    .string()
    .min(20, "Description must be at least 20 characters"),

  deadline: z
    .string()
    .min(1, "Deadline is required"),

  applyLink: z
    .string()
    .url("Please enter a valid URL"),

  logo: z.string().optional(),

  isRemote: z.boolean().optional(),

  companyDescription: z
    .string()
    .min(20, "Company description must be at least 20 characters"),
    
requirements: z
  .array(
    z.object({
      value: z
        .string()
        .min(2, "Requirement is too short"),
    })
  )
  .min(1, "Add at least one requirement"),

benefits: z
  .array(
    z.object({
      value: z
        .string()
        .min(2, "Benefit is too short"),
    })
  )
  .min(1, "Add at least one benefit"),
});

export type OpportunityFormData = z.infer<typeof opportunitySchema>;