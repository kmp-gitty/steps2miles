"use client";

import { useMemo, useState } from "react";

type Method = "average" | "height" | "myStep";
type Sex = "male" | "female";
type Unit = "mi" | "km";

export default function StepsToMilesCalculator() {
  const [steps, setSteps] = useState<number>(10000);

  // Methods
  const [method, setMethod] = useState<Method>("average");

  // Height method inputs
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(10);
  const [sex, setSex] = useState<Sex>("male");

  // My step length input (feet)
  const [myStepLengthFt, setMyStepLengthFt] = useState<number>(2.35);

  // Result unit toggle (default miles)
  const [unit, setUnit] = useState<Unit>("mi");

  const miles = useMemo(() => {
    const safeSteps = Number.isFinite(steps) ? steps : 0;
    if (safeSteps <= 0) return 0;

    // Average step length in feet (male/female average)
    if (method === "average") {
      const stepLengthFt = 2.35; // per your spec
      return (safeSteps * stepLengthFt) / 5280;
    }

    // Height estimate:
    // ( ( (heightFt*12 + heightIn) * g ) / 12 ) * steps / 5280
    if (method === "height") {
      const totalInches =
        (Number.isFinite(heightFt) ? heightFt : 0) * 12 +
        (Number.isFinite(heightIn) ? heightIn : 0);

      const g = sex === "male" ? 0.415 : 0.413;

      const stepLengthFt = (totalInches * g) / 12;

      if (totalInches <= 0 || stepLengthFt <= 0) return 0;

      return (safeSteps * stepLengthFt) / 5280;
    }

    // My step length:
    // (steps * entered step length) / 5280
    const stepLengthFt = Number.isFinite(myStepLengthFt) ? myStepLengthFt : 0;
    if (stepLengthFt <= 0) return 0;

    return (safeSteps * stepLengthFt) / 5280;
  }, [steps, method, heightFt, heightIn, sex, myStepLengthFt]);

  const displayValue = useMemo(() => {
    const value = unit === "mi" ? miles : miles * 1.60934; // miles -> km
    return value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, [miles, unit]);

  const helperText =
    method === "average"
      ? "Distance calculation based on average step length for male & female."
      : method === "height"
      ? "We estimate step length from your height to calculate distance."
      : "If you know your personal step length, this is the most accurate option.";

  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-4">
          {/* Steps */}
          <div>
            <label className="text-sm font-medium text-slate-800">Steps</label>
            <input
              type="number"
              inputMode="numeric"
              value={steps}
              onChange={(e) => setSteps(Number(e.target.value))}
              className="mt-1 w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-slate-900 outline-none ring-orange-200 focus:ring-2"
              min={0}
            />
          </div>

          {/* Method */}
          <div>
            <label className="text-sm font-medium text-slate-800">Method</label>
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setMethod("average")}
                className={`rounded-full px-3 py-2 text-sm font-medium border ${
                  method === "average"
                    ? "bg-orange-600 text-white border-orange-600"
                    : "bg-white text-slate-800 border-orange-200 hover:bg-orange-50"
                }`}
              >
                Average Step Length
              </button>

              <button
                type="button"
                onClick={() => setMethod("height")}
                className={`rounded-full px-3 py-2 text-sm font-medium border ${
                  method === "height"
                    ? "bg-orange-600 text-white border-orange-600"
                    : "bg-white text-slate-800 border-orange-200 hover:bg-orange-50"
                }`}
              >
                Height Estimate
              </button>

              <button
                type="button"
                onClick={() => setMethod("myStep")}
                className={`rounded-full px-3 py-2 text-sm font-medium border ${
                  method === "myStep"
                    ? "bg-orange-600 text-white border-orange-600"
                    : "bg-white text-slate-800 border-orange-200 hover:bg-orange-50"
                }`}
              >
                My Step Length
              </button>
            </div>
          </div>

          {/* Conditional inputs */}
          {method === "height" && (
            <div className="space-y-3">
              {/* Height ft/in */}
              <div>
                <label className="text-sm font-medium text-slate-800">
                  Height
                </label>
                <div className="mt-1 grid grid-cols-2 gap-2">
                  <div>
                    <input
                      type="number"
                      inputMode="numeric"
                      value={heightFt}
                      onChange={(e) => setHeightFt(Number(e.target.value))}
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-slate-900 outline-none ring-orange-200 focus:ring-2"
                      min={0}
                      placeholder="ft"
                    />
                    <p className="mt-1 text-xs text-slate-500">ft</p>
                  </div>
                  <div>
                    <input
                      type="number"
                      inputMode="numeric"
                      value={heightIn}
                      onChange={(e) => setHeightIn(Number(e.target.value))}
                      className="w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-slate-900 outline-none ring-orange-200 focus:ring-2"
                      min={0}
                      placeholder="in"
                    />
                    <p className="mt-1 text-xs text-slate-500">in</p>
                  </div>
                </div>
              </div>

              {/* Male/Female selector */}
              <div>
                <label className="text-sm font-medium text-slate-800">
                  Sex
                </label>
                <div className="mt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setSex("male")}
                    className={`rounded-full px-3 py-2 text-sm font-medium border ${
                      sex === "male"
                        ? "bg-orange-600 text-white border-orange-600"
                        : "bg-white text-slate-800 border-orange-200 hover:bg-orange-50"
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setSex("female")}
                    className={`rounded-full px-3 py-2 text-sm font-medium border ${
                      sex === "female"
                        ? "bg-orange-600 text-white border-orange-600"
                        : "bg-white text-slate-800 border-orange-200 hover:bg-orange-50"
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>
            </div>
          )}

          {method === "myStep" && (
            <div>
              <label className="text-sm font-medium text-slate-800">
                Step length (feet)
              </label>
              <input
                type="number"
                inputMode="decimal"
                value={myStepLengthFt}
                onChange={(e) => setMyStepLengthFt(Number(e.target.value))}
                className="mt-1 w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-slate-900 outline-none ring-orange-200 focus:ring-2"
                min={0}
              />
            </div>
          )}
        </div>

        {/* Result */}
        <div className="rounded-3xl bg-orange-400 p-6 text-black">
          <p className="text-sm font-medium text-black">Result</p>

          {/* Value + Unit Toggle */}
          <div className="mt-2 flex items-end justify-between gap-4">
            <div className="text-4xl font-semibold tracking-tight text-black">
              {displayValue}
              <span className="ml-2 text-lg font-medium text-black">
                {unit === "mi" ? "miles" : "km"}
              </span>
            </div>

            <div className="flex rounded-full border border-orange-100 bg-white p-1">
              <button
                type="button"
                onClick={() => setUnit("mi")}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  unit === "mi"
                    ? "bg-orange-600 text-white"
                    : "text-slate-800 hover:bg-orange-50"
                }`}
                aria-pressed={unit === "mi"}
              >
                mi
              </button>
              <button
                type="button"
                onClick={() => setUnit("km")}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold ${
                  unit === "km"
                    ? "bg-orange-600 text-white"
                    : "text-slate-800 hover:bg-orange-50"
                }`}
                aria-pressed={unit === "km"}
              >
                km
              </button>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-black">
            <p>
              <span className="font-medium">Steps:</span>{" "}
              {(steps || 0).toLocaleString()}
            </p>
            <p>
              <span className="font-medium">Method:</span>{" "}
              {method === "average"
                ? "Average Step Length"
                : method === "height"
                ? "Height Estimate"
                : "My Step Length"}
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-orange-100 bg-white p-4 text-xs text-slate-600">
            {helperText}
          </div>
        </div>
      </div>
    </div>
  );
}


