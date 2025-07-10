import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, RotateCcw, Trophy } from "lucide-react";

export default function HeadTail() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [columns, setColumns] = useState<string[][]>([]);
  const [validationMessage, setValidationMessage] = useState<string>("");

  const handleSubmit = () => {
    if (!selectedValue || selectedValue === "") {
      setValidationMessage("Please select value from dropdown");
      return;
    }

    setValidationMessage("");

    setColumns((prev) => {
      if (prev.length === 0) {
        // First value: create new column
        return [[selectedValue]];
      }

      const lastColumn = prev[prev.length - 1];
      const firstValueOfLastColumn = lastColumn[0]; // Check the first value of the last column

      if (selectedValue === firstValueOfLastColumn) {
        // Same value as the column's first value: append to last column
        const newColumns = [...prev];
        const lastColumnIndex = newColumns.length - 1;
        newColumns[lastColumnIndex] = [...newColumns[lastColumnIndex], selectedValue];
        return newColumns;
      } else {
        // Different value: create new column
        return [...prev, [selectedValue]];
      }
    });

    setSelectedValue("");
  };

  const clearAll = () => {
    setColumns([]);
    setSelectedValue("");
    setValidationMessage("");
  };

  const totalMoves = columns.reduce((sum, col) => sum + col.length, 0);

  // Transform columns into rows for display
  const maxRows = Math.max(...columns.map((col) => col.length), 0);
  const rows = Array.from({ length: maxRows }).map((_, rowIndex) =>
    columns.map((col) => col[rowIndex] || null)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-6">
      <div className="max-w-5xl mx-auto pt-8">
        <div className="mb-8">
          <Link to="/">
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🎯 Head & Tail Game
          </h1>
          <p className="text-xl text-white/90 drop-shadow">
            Choose H or T and watch the magic happen!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Game Controls */}
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                🎮 Game Controls
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-3">
                    Select Head (H) or Tail (T):
                  </label>
                  <Select
                    value={selectedValue}
                    onValueChange={setSelectedValue}
                  >
                    <SelectTrigger className="w-full h-14 text-lg border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="🎲 Select Value" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="H" className="text-lg">
                        🔵 H (Head)
                      </SelectItem>
                      <SelectItem value="T" className="text-lg">
                        🔴 T (Tail)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full h-14 text-lg font-bold bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg"
                >
                  🚀 Submit Choice
                </Button>

                {validationMessage && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
                    <p className="text-red-600 font-semibold text-center">
                      ⚠️ {validationMessage}
                    </p>
                  </div>
                )}

                {totalMoves > 0 && (
                  <div className="flex gap-4">
                    <Button
                      onClick={clearAll}
                      variant="outline"
                      className="flex-1 h-12 border-2 border-gray-300 hover:bg-gray-50 bg-transparent"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Clear All
                    </Button>
                    <div className="flex items-center bg-blue-50 px-4 rounded-lg border-2 border-blue-200">
                      <Trophy className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="font-bold text-blue-700">
                        Moves: {totalMoves}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Game Results */}
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                📊 Results
              </h2>

              {totalMoves === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎲</div>
                  <p className="text-gray-500 text-lg">
                    Make your first choice to see results!
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="flex gap-8 min-w-max">
                    {columns.map((column, colIndex) => (
                      <div key={`col-${colIndex}`} className="text-center min-w-[120px]">
                        <div
                          className={`rounded-lg p-3 mb-4 border-2 ${
                            column[0] === "H"
                              ? "bg-blue-100 border-blue-200"
                              : "bg-red-100 border-red-200"
                          }`}
                        >
                          <h3
                            className={`text-lg font-bold ${
                              column[0] === "H" ? "text-blue-700" : "text-red-700"
                            }`}
                          >
                            {column[0] === "H" ? "🔵 Head (H)" : "🔴 Tail (T)"}
                          </h3>
                          <p
                            className={`text-sm ${
                              column[0] === "H" ? "text-blue-600" : "text-red-600"
                            }`}
                          >
                            Count: {column.length}
                          </p>
                        </div>
                        <div className="space-y-3">
                          {rows.map((row, rowIndex) => (
                            <div
                              key={`cell-${colIndex}-${rowIndex}`}
                              className={`w-16 h-16 mx-auto ${
                                row[colIndex]
                                  ? `bg-gradient-to-br ${
                                      row[colIndex] === "H"
                                        ? "from-blue-500 to-blue-600"
                                        : "from-red-500 to-red-600"
                                    } text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg transform hover:scale-105 transition-transform`
                                  : "bg-gray-200 rounded-xl"
                              }`}
                            >
                              {row[colIndex] || ""}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-400 border-0 shadow-2xl">
          <CardContent className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">
              📋 How to Play
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="mr-2">1️⃣</span> Select H or T from dropdown
                </p>
                <p className="flex items-center">
                  <span className="mr-2">2️⃣</span> Click Submit to add your choice
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="mr-2">3️⃣</span> Watch values organize in columns
                </p>
                <p className="flex items-center">
                  <span className="mr-2">4️⃣</span> Same values stack vertically
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}