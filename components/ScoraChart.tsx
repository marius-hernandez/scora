"use client"
import React, { useEffect, useState } from 'react'


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
import { ScoraType } from '@/types/ScoraType'
import { title } from 'process'
// const chartData = [
//   { title: "Length", value: 186 },
//   { title: "Keywords", value: 305 },
//   { title: "Education", value: 237 },
//   { title: "Experience", value: 273 },
// ]

const chartConfig = {
  value: {
    label: "percent",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig
const ScoraChart = (scora:ScoraType) => {
  const [data, setData]=useState([{}]);

  const getPercent=(raw:number, max:number)=>{
    return (raw/max)*100
  }

  useEffect(()=>{
    setData([
      {title:"Length", value: getPercent(scora.length[1],5)},
      {title:"Keywords", value:getPercent(scora.keyword[1],10)},
      {title:"Education", value:getPercent(scora.education[1],5)},
      {title:"Experience", value:getPercent(scora.experience[1],5)},
    ])
  },[])
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
          <RadarChart data={data}>
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