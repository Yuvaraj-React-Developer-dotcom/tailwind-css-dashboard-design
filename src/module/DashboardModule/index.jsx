import React from "react";
import Card from "./Card";
import AreaChart from "./Chart/AreaChart";
import PieChart from "./Chart/PieChart";
import { Line } from "react-chartjs-2";
import LineChart from "./Chart/LineChart";
import { data } from "./Card/data";
const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.875em] mb-[20px]">
        {data?.map((item, index) => (
          <Card item={item} />
        ))}
      </div>
      <div className="grid grid-cols-1 mb-[20px]">
        <div className="h-[64vh] p-[1em] bg-[#fff] rounded-[12px] shadow flex flex-col justify-between">
          <div>
            <div>
              <div className="mt-[0.625] mb-[0.75rem] text-[1.57em]">
                Users Behavior
              </div>
              <div className="mb-[1rem] text-[#9a9a9a] text-[1em]">
                24 Hours performance
              </div>
            </div>
            <AreaChart />
          </div>
          <div>
            <div className="border-b-[1px] border-[#ddd] my-[1rem]"></div>
            <div className="flex gap-[6px] items-center">
              <div>
                <svg
                  width="16"
                  height="16"
                  fill="#9a9a9a"
                  class="bi bi-stopwatch"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
                </svg>
              </div>
              <div className="text-[#9a9a9a] text-[14px]">
                Updated 3 minutes ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-y-[1.875em] sm:gap-y-[1.875em] md:gap-x-[1.875em] mb-[20px] ">
        <div className="h-[54vh] bg-[#fff] p-[1em] rounded-[12px] shadow flex flex-col justify-between">
          <div>
            <div>
              <div className="mt-[0.625] mb-[0.75rem] text-[1.57em]">
                Email Statistics
              </div>
              <div className="mb-[1rem] text-[#9a9a9a] text-[1em]">
                Last Campaign Performance
              </div>
            </div>
            <PieChart />
          </div>
          <div>
            <div className="border-b-[1px] border-[#ddd] my-[1rem]"></div>
            <div className="flex gap-[6px] items-center">
              <div>
                <svg
                  width="16"
                  height="16"
                  fill="#9a9a9a"
                  class="bi bi-stopwatch"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
                </svg>
              </div>
              <div className="text-[#9a9a9a] text-[14px]">
                Number of emails sent
              </div>
            </div>
          </div>
        </div>
        <div className="h-[54vh] overflow-hidden col-span-2 bg-[#fff] p-[1em] rounded-[12px] shadow flex flex-col justify-between">
          <div>
            <div>
              <div className="mt-[0.625] mb-[0.75rem] text-[1.57em]">
                NASDAQ: AAPL
              </div>
              <div className="mb-[1rem] text-[#9a9a9a] text-[1em]">
                Line Chart With Points
              </div>
            </div>
            <LineChart />
          </div>
          <div>
            <div className="border-b-[1px] border-[#ddd] my-[1rem]"></div>
            <div className="flex gap-[6px] items-center">
              <div>
                <svg
                  width="16"
                  height="16"
                  fill="#9a9a9a"
                  class="bi bi-stopwatch"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z" />
                  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3" />
                </svg>
              </div>
              <div className="text-[#9a9a9a] text-[14px]">
                Data information certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
