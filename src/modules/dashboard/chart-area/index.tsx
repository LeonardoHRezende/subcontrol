"use client"

import * as React from "react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card"

import {
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip
} from "@/components/atoms/chart"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/atoms/toggle-group"

import { chartData } from "./constant"
import { chartConfig } from "./constant"

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("30d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card relative bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900">
      <CardHeader>
        <CardTitle>Total gasto</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden text-zinc-400 dark:text-zinc-600">
            Total dos últimos {timeRange}
          </span>
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden gap-1"
          >
            {[
              { value: "90d", label: "Últimos 3 meses" },
              { value: "30d", label: "Últimos 30 dias" },
              { value: "7d", label: "Últimos 7 dias" },
            ].map(({ value, label }) => (
              <ToggleGroupItem
                key={value}
                value={value}
                className="h-8 px-2.5 rounded-md bg-zinc-700 text-zinc-200 dark:bg-zinc-200 dark:text-zinc-800 data-[state=on]:bg-zinc-100 data-[state=on]:text-zinc-900 dark:data-[state=on]:bg-zinc-900 dark:data-[state=on]:text-white transition-colors"
              >
                {label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.9} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" strokeOpacity={0.2} />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tick={{ fill: "currentColor" }}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900"
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                  valueFormatter={(value => {
                    const numberValue = Number(value)
                    return numberValue.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 0,
                    })
                  }
                  )}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="spend"
              name="Gastos"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
