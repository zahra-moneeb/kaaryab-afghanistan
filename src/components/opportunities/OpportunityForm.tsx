"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Opportunity } from "@/types/opportunity";
import { useRouter } from "next/navigation";

import {
  opportunitySchema,
  OpportunityFormData,
} from "@/schemas/opportunitySchema";

import FormInput from "@/components/ui/FormInput";
import FormTextarea from "@/components/ui/FormTextarea";
import FormSelect from "@/components/ui/FormSelect";
import DynamicListField from "@/components/ui/DynamicListField";



type OpportunityFormProps = {
  initialData?: Opportunity;
};

export default function OpportunityForm({initialData}: 
  OpportunityFormProps) {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors ,  isSubmitting, },
  } = useForm<OpportunityFormData>({
    resolver: zodResolver(opportunitySchema),
    defaultValues: {

      title: initialData?.title ?? "",

      company: initialData?.company ?? "",

      logo: initialData?.logo ?? "",

      opportunityType:
        initialData?.opportunityType ?? "",

      category:
        initialData?.category ?? "",

      type:
        initialData?.type ?? "",

      location:
        initialData?.location ?? "",

      isRemote:
        initialData?.isRemote ?? false,

      salary:
        initialData?.salary ?? "",

      experience:
        initialData?.experience ?? "",

      description:
        initialData?.description ?? "",

      companyDescription:
        initialData?.companyDescription ?? "",

      deadline:
        initialData?.deadline ?? "",

      applyLink:
        initialData?.applyLink ?? "",

      requirements:
        initialData?.requirements ?? [],

      benefits:
        initialData?.benefits ?? [],

    }
  });

const router = useRouter();

const onSubmit = async (
  data: OpportunityFormData
) => {

  try {

    let response;

    if (initialData) {

      response = await fetch(
        `/api/opportunities/${initialData.id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );

    } else {

      response = await fetch(
        "/api/opportunities",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );

    }


    if (!response.ok) {

      throw new Error(
        initialData
          ? "Failed to update opportunity"
          : "Failed to create opportunity"
      );

    }


    const savedOpportunity =
      await response.json();

    router.push(
  `/opportunities/${savedOpportunity.id}`
);

router.refresh();


    console.log(
      initialData
        ? "Updated:"
        : "Created:",
      savedOpportunity
    );

  } catch (error) {

    console.error(error);

  }

};

 return (
    
   
  <form
    

   onSubmit={handleSubmit(
    onSubmit,
    (errors) => {
      console.log("Validation Errors:", errors);
    }
  )}
  >

    <FormInput
      label="Opportunity Title"
      name="title"

      register={register}
      error={errors.title}

      placeholder="Enter opportunity title"

      required
    />


    <FormInput
      label="Company Name"
      name="company"

      register={register}
      error={errors.company}

      placeholder="Enter company name"

      required
    />

    <FormInput
  label="Company Logo"
  name="logo"

  register={register}
  error={errors.logo}

  placeholder="/images/companies/logo.png"
/>


<FormSelect
  label="Opportunity Type"
  name="opportunityType"

  register={register}
  error={errors.opportunityType}

  options={[
    {
      label: "Internship",
      value: "Internship",
    },

    {
      label: "Job",
      value: "Job",
    },

    {
      label: "Scholarship",
      value: "Scholarship",
    },

    {
      label: "Course",
      value: "Course",
    },
  ]}

  required
/>



<FormSelect
  label="Category"
  name="category"

  register={register}
  error={errors.category}

  options={[
    {
      label: "Technology",
      value: "Technology",
    },

    {
      label: "Design",
      value: "Design",
    },

    {
      label: "Business",
      value: "Business",
    },

    {
      label: "Education",
      value: "Education",
    },
  ]}

  required
/>



<FormSelect
  label="Type"
  name="type"

  register={register}
  error={errors.type}

  options={[
    {
      label: "Internship",
      value: "Internship",
    },

    {
      label: "Job",
      value: "Job",
    },

    {
      label: "Scholarship",
      value: "Scholarship",
    },

    {
      label: "Course",
      value: "Course",
    },
  ]}

  required
/>

<FormInput
  label="Location"
  name="location"

  register={register}
  error={errors.location}

  placeholder="Kabul, Afghanistan"

  required
/>

<div className="flex items-center gap-2">

  <input
    type="checkbox"

    {...register("isRemote")}

    className="h-4 w-4"
  />

  <label>
    Remote Opportunity
  </label>

</div>

<FormInput
  label="Salary"
  name="salary"

  register={register}
  error={errors.salary}

  placeholder="Unpaid / $500 per month"
/>

<FormSelect
  label="Experience Level"
  name="experience"

  register={register}
  error={errors.experience}

  options={[
    {
      label: "Beginner",
      value: "Beginner",
    },
    {
      label: "Intermediate",
      value: "Intermediate",
    },
    {
      label: "Advanced",
      value: "Advanced",
    },
  ]}

  required
/>

<FormTextarea
  label="Opportunity Description"

  name="description"

  register={register}

  error={errors.description}

  placeholder="Describe this opportunity..."

  rows={6}

  required
/>

<FormTextarea
  label="Company Description"

  name="companyDescription"

  register={register}

  error={errors.companyDescription}

  placeholder="Describe the company or organization..."

  rows={5}

  required
/>
<DynamicListField
  label="Requirements"

  name="requirements"

  control={control}

  register={register}

  errors={errors}
/>

<DynamicListField
  label="Benefits"

  name="benefits"

  control={control}

  register={register}

  errors={errors}
/>

<FormInput
  label="Application Deadline"
  name="deadline"
  type="date"
  register={register}
  error={errors.deadline}
  required
/>

<FormInput
  label="Application Link"
  name="applyLink"
  register={register}
  error={errors.applyLink}
  placeholder="https://example.com/apply"
  required
/>

 <button
  type="submit"
  disabled={isSubmitting}
  className="
    rounded-lg
    bg-blue-600
    px-6
    py-2
    text-white
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
>
  {
    isSubmitting
      ? initialData
        ? "Updating..."
        : "Creating..."
      : initialData
        ? "Update Opportunity"
        : "Create Opportunity"
  }
</button>


  </form>


 );
 
}