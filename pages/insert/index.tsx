import DefaultLayout from '@/layouts/default';
import { BankSelector } from '@/components/bankSelector';
import {
  Form,
  Input,
  DatePicker,
  Button,
  Textarea,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { now, getLocalTimeZone } from '@internationalized/date';
import { FormEvent, useState } from 'react';

export interface SubmittedData {
  [key: string]: FormDataEntryValue;
}
export default function FormPage() {
  const [submitted, setSubmitted] = useState<SubmittedData | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    setSubmitted(data);
  };
  return (
    <DefaultLayout>
      <Form
        className="w-full justify-center items-center w-full space-y-4"
        validationBehavior="native"
        onReset={() => setSubmitted(null)}
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-4">
          <BankSelector />
          <Select
            isRequired
            label="Account Type"
            name="accountType"
            placeholder="Select account type"
          >
            <SelectItem value="credit">Credit Card</SelectItem>
            <SelectItem value="checking&savings">
              Checking&Savings Account
            </SelectItem>
            <SelectItem value="brokerage">Brokerage Account</SelectItem>
          </Select>
          <DatePicker
            label="Date"
            aria-label="Date (Visible Month)"
            defaultValue={now(getLocalTimeZone())}
            visibleMonths={3}
          />

          <div className="flex gap-4">
            <Button className="w-full" color="primary" type="submit">
              Submit
            </Button>
            <Button type="reset" variant="bordered">
              Reset
            </Button>
          </div>
        </div>
      </Form>
      <Textarea
        label="Submitted data"
        className="mt-4"
        value={JSON.stringify(submitted, null, 2)}
      ></Textarea>
    </DefaultLayout>
  );
}
