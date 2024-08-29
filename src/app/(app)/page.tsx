import { DayOrdersAmountCard } from '@/components/cards/day-orders-amout-card'
import { MonthCanceledOrdersAmountCard } from '@/components/cards/month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from '@/components/cards/month-orders-amount-card'
import { MonthReceiptCard } from '@/components/cards/month-receipt-card'
import { PopularProductsChart } from '@/components/charts/popular-products-chart'
import { ReceiptChart } from '@/components/charts/receipt-chart'

export default function Home() {
  return (
    <div className="flex flex-col mx-auto w-full space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <MonthReceiptCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>
      <div className="grid grid-cols-3 space-x-2">
        <div className="col-span-2">
          <ReceiptChart />
        </div>
        <div>
          <PopularProductsChart />
        </div>
      </div>
    </div>
  )
}
