import React from 'react';
import { cn } from '@/lib/utils';
import { CheckIcon, LucideIcon, MinusIcon } from 'lucide-react';
import { Badge } from './badge';

function PricingTable({ className, ...props }: React.ComponentProps<'table'>) {
	return (
		<div
			data-slot="table-container"
			className="relative w-full py-8 overflow-x-auto md:overflow-visible"
		>
			<table className={cn('w-full text-base', className)} style={{ borderCollapse: 'separate', borderSpacing: '0' }} {...props} />
		</div>
	);
}

function PricingTableHeader({ ...props }: React.ComponentProps<'thead'>) {
	return <thead data-slot="table-header" {...props} />;
}

function PricingTableBody({
	className,
	...props
}: React.ComponentProps<'tbody'>) {
	return (
		<tbody
			data-slot="table-body"
			className={cn('[&_tr]:divide-x [&_tr]:border-b', className)}
			{...props}
		/>
	);
}

function PricingTableRow({ ...props }: React.ComponentProps<'tr'>) {
	return <tr data-slot="table-row" {...props} />;
}

function PricingTableCell({
	className,
	children,
	...props
}: React.ComponentProps<'td'> & { children: boolean | string }) {
	return (
		<td
			data-slot="table-cell"
			className={cn('px-4 py-6 md:px-8 md:py-8 align-middle text-gray-700 font-medium text-center', className)}
			{...props}
		>
			{children === true ? (
				<CheckIcon aria-hidden="true" className="size-6 text-lime-600 mx-auto" strokeWidth={3} />
			) : children === false ? (
				<MinusIcon
					aria-hidden="true"
					className="text-gray-300 size-6 mx-auto"
				/>
			) : (
				children
			)}
		</td>
	);
}

function PricingTableHead({ className, ...props }: React.ComponentProps<'th'>) {
	return (
		<th
			data-slot="table-head"
			className={cn(
				'px-4 py-6 md:px-8 md:py-8 text-left align-middle font-bold text-gray-900 border-r border-gray-100 bg-gray-50/30',
				className,
			)}
			{...props}
		/>
	);
}

function PricingTablePlan({
	name,
	badge,
	price,
	compareAt,
	icon: Icon,
	children,
	className,
	...props
}: React.ComponentProps<'div'> & PricingPlanType) {
	return (
		<div
			className={cn(
				'flex flex-col bg-white relative h-full rounded-2xl border p-6 md:p-8 font-normal shadow-sm transition-all duration-300 hover:shadow-xl',
				className,
			)}
			{...props}
		>
			<div className="flex items-center gap-3 mb-2">
				<div className="flex items-center justify-center rounded-xl bg-gray-50 text-gray-800 p-2 border border-gray-100">
					{Icon && <Icon className="h-5 w-5" />}
				</div>
				<h3 className="text-gray-900 font-bold text-lg md:text-xl capitalize">{name}</h3>
				<Badge
					variant="secondary"
					className="ml-auto rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap"
				>
					{badge}
				</Badge>
			</div>

			<div className="mt-4 flex flex-col gap-1 items-start">
				<span className="text-4xl md:text-5xl font-extrabold text-[#111]">{price}</span>
				{compareAt && (
					<span className="text-gray-500 text-sm md:text-base font-medium">
						{compareAt}
					</span>
				)}
			</div>
			<div className="relative z-10 mt-8 mb-2 w-full mt-auto">{children}</div>
		</div>
	);
}

type PricingPlanType = {
	name: string;
	icon: LucideIcon;
	badge: string;
	price: string;
	compareAt?: string;
};

type FeatureValue = boolean | string;

type FeatureItem = {
	label: string;
	values: FeatureValue[];
};

export {
	type PricingPlanType,
	type FeatureValue,
	type FeatureItem,
	PricingTable,
	PricingTableHeader,
	PricingTableBody,
	PricingTableRow,
	PricingTableHead,
	PricingTableCell,
	PricingTablePlan,
};
