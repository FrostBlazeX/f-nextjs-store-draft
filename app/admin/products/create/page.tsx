import { Button } from "@/components/ui/button";
import FormInput from "@/components/form/FormInput";
import { faker } from "@faker-js/faker";
import FormContainer from "@/components/form/FormContainer";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckBoxInput from "@/components/form/CheckBoxInput";
import { SubmitButton } from "@/components/form/Buttons";
import { createProductAction } from "@/utils/actions";

function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="product Name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="Company"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckBoxInput name="featured" label="featured" />
          </div>
          <SubmitButton text="create product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProductPage;
