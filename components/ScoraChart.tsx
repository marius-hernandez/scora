"use client"
import React from 'react'


import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { title: "Length", value: 186 },
  { title: "Keywords", value: 305 },
  { title: "Education", value: 237 },
  { title: "Experience", value: 273 },
]

const chartConfig = {
  value: {
    label: "value",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig
const ScoraChart = () => {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle className='text-2xl font-black'>Scora chart</CardTitle>
        <CardDescription>
          Radar graph score on different criterias
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0 ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-full"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="title" />
            <PolarGrid />
            <Radar
              dataKey="value"
              fill="var(--color-value)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
        <br />
      </CardContent>
    </Card>
  )
}

export default ScoraChart