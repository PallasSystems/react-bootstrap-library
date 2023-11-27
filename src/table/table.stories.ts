import type { Meta, StoryObj } from '@storybook/react';

import { RBTable } from './table.components';
import { searchableArgs } from '../common/common.testdata';
import type { SimpleDataType } from '../common/common.testdata';

const meta = {
  title: 'react-bootstrap-table/Table',
  component: RBTable<SimpleDataType>,
  tags: ['autodocs'],
  args: {
    ...searchableArgs,
    header: {
      enableTableHead: true,
      enableDensityToggle: true,
    },
  },
} satisfies Meta<typeof RBTable<SimpleDataType>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const DisabledTableHeader: Story = {
  args: {
    header: {
      enableTableHead: false,
    },
  },
};

export const HeaderFunctionSetOnColumnDefs: Story = {
  args: {
    columns: [
      { accessorKey: 'firstName', header: 'First Name', searchable: true, Header: () => 'Header Function Name' },
      { accessorKey: 'surname', header: 'Surname', searchable: true, Header: () => 'Header Function Surname' },
      { accessorKey: 'age', header: 'Age', Header: () => 'Header Function Age' },
    ],
  },
};

export const PrimaryVarient: Story = {
  args: {
    varient: 'primary',
  },
};

export const SecondaryVarient: Story = {
  args: {
    varient: 'secondary',
  },
};

export const SuccessVarient: Story = {
  args: {
    varient: 'success',
  },
};

export const WarningVarient: Story = {
  args: {
    varient: 'warning',
  },
};

export const DangerVarient: Story = {
  args: {
    varient: 'danger',
  },
};

export const InfoVarient: Story = {
  args: {
    varient: 'info',
  },
};

export const LightVarient: Story = {
  args: {
    varient: 'light',
  },
};

export const DarkVarient: Story = {
  args: {
    varient: 'dark',
  },
};

export const LinkVarient: Story = {
  args: {
    varient: 'link',
  },
};
