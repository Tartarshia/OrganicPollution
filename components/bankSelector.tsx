import { Select, SelectItem, SelectProps } from '@nextui-org/react';

const bankList = [
  {
    label: 'American Express',
    value: 'amex',
  },
  {
    label: 'Barclays',
    value: 'barclays',
  },
  {
    label: 'Bank of America',
    value: 'bofa',
  },
  {
    label: 'Capital One',
    value: 'capitalone',
  },
  {
    label: 'Chase',
    value: 'chase',
  },
  {
    label: 'Citi',
    value: 'citi',
  },
  {
    label: 'Fidelity',
    value: 'fidelity',
  },
  {
    label: 'Discover',
    value: 'discover',
  },
  {
    label: 'U.S. Bank',
    value: 'usbank',
  },
  {
    label: 'Wells Fargo',
    value: 'wellsfargo',
  },
];
export const BankSelector = (props: Omit<SelectProps, 'children'>) => {
  return (
    <Select
      isRequired
      label="Bank"
      items={bankList}
      name="bank"
      placeholder="Select bank"
      {...props}
    >
      {bankList.map((bank) => (
        <SelectItem key={bank.value} value={bank.value}>
          {bank.label}
        </SelectItem>
      ))}
    </Select>
  );
};
