"use client";

import { ChartAreaInteractive } from "@/modules/dashboard/chart-area";

import { Container } from "@/components/templates/container";
import { NavigationBar } from "@/components/molecule/app-nav";
import { DataTable } from "@/modules/dashboard/table";
import { SectionCards } from "@/modules/dashboard/resume-card";
import { SiteHeader } from "@/modules/dashboard/site-header";

import data from "@/modules/dashboard/data.json";

export default function DashboardPage() {
  return (
    <Container>
      <div className="flex flex-col min-h-screen space-y-4 w-full max-w-7xl">
        <NavigationBar />
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6">
              <SectionCards />

              <ChartAreaInteractive />

              <DataTable data={data} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
