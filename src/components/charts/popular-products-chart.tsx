'use client'

import { Pie, PieChart } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 1872, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
]

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Big brasa',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Frangolino',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'PCQ',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'deFUMADO',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Queijo gouda',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function PopularProductsChart() {
  return (
    <Card className="flex flex-col border">
      <CardHeader className="items-center pb-0">
        <CardTitle>Produtos populares</CardTitle>
        <CardDescription>Os 5 produtos com mais vendas</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-video max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              labelLine={false}
              innerRadius={65}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="hsla(var(--foreground))"
                  >
                    {`${
                      chartConfig[payload.browser as keyof typeof chartConfig]
                        ?.label
                    } (${payload.visitors})`}
                  </text>
                )
              }}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
