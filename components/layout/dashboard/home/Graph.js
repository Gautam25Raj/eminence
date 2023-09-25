"use client";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Option, Select } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import localFont from "next/font/local";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useLiveGraph from "@/hooks/useLiveGraph";
import { useSelector } from "react-redux";

const myFont = localFont({
  src: "../../../../public/fonts/Satoshi-Variable.woff2",
});

const Graph = () => {
  const [value, setValue] = useState("1m");
  const history = useSelector((state) => state.graph.history);
  const { FetchHistory } = useLiveGraph();
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    FetchHistory(value);
  }, [value]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="bg-[#1C1D22] px-5 py-5 rounded-xl"
          style={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          <p className="text-white font-bold">{`${Number(
            payload[0].value
          ).toFixed(2)}`}</p>
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
  }, []);

  return (
    <div
      className="flex flex-col bg-[#00000066] rounded-[8px] w-full overflow-hidden"
      style={{
        height: `calc(270/1280 * ${currentWidth}px)`,
      }}
    >
      <div className="flex w-full justify-between items-center px-[20px] h-[64px] rounded-t-[8px] border-b-[1px] border-dashed border-white">
        <div className="flex gap-[10px] items-center">
          <div
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(261deg, #26FFFF 5.76%, #4AFF93 94.17%)",
            }}
          >
            <Image
              src="/images/Dashboard/AsideContainer/SOL.svg"
              width={20}
              height={20}
              alt="solana"
            />
          </div>

          <div className="flex flex-col gap-[2px]">
            <h1 className="text-white text-[16px] font-bold">$19.20</h1>
            <h1 className="text-[#00FFB0] text-[12px]">
              +2.5% <span className="text-[#f0f0f099]">vs. 30d</span>
            </h1>
          </div>
        </div>

        <div className="flex  items-center">
          <CalendarDaysIcon className="w-[20px] h-[20px] text-white" />
          <Select
            variant="outlined"
            label=""
            className={
              "border-transparent text-white w-[100px] " + myFont.className
            }
            labelProps={{
              className:
                "before:border-transparent after:border-transparent w-[100px]",
            }}
            containerProps={{
              className: "min-w-[100px]",
            }}
            onChange={(e) => {
              setValue(e);
            }}
            value={value}
          >
            <Option value="1m">1m</Option>
            <Option value="15m">15m</Option>
            <Option value="1h">1h</Option>
            <Option value="1d">1d</Option>
            <Option value="1w">7d</Option>
          </Select>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center">
        {history && history.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={history}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#26FFFF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4AFF93" stopOpacity={0.8} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
              <Tooltip content={<CustomTooltip />} />

              <YAxis domain={["dataMin + 0.1", "dataMax + 0.1"]} hide />
              <Area
                type="monotone"
                dataKey="ticker"
                stroke="#4AFF93"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Graph;
