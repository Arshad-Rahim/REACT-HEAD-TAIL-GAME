import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-6">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
            🎯 Head & Tail
          </h1>
          <p className="text-xl text-white/90 mb-12 drop-shadow">
            Choose your adventure and play the game!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="group hover:scale-105 transition-all duration-300 shadow-2xl border-0">
            <CardContent className="p-8 text-center bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg">
              <div className="text-4xl mb-4">📖</div>
              <h2 className="text-2xl font-bold mb-4">About Us</h2>
              <p className="mb-6 opacity-90">
                Learn more about this amazing app
              </p>
              <Link to="/about">
                <Button
                  size="lg"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  Read More
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="group hover:scale-105 transition-all duration-300 shadow-2xl border-0">
            <CardContent className="p-8 text-center bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg">
              <div className="text-4xl mb-4">🎮</div>
              <h2 className="text-2xl font-bold mb-4">Play Game</h2>
              <p className="mb-6 opacity-90">Start the Head & Tail challenge</p>
              <Link to="/head-tail">
                <Button
                  size="lg"
                  className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold"
                >
                  Play Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                ✨ Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/90">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚀</div>
                  <p className="font-semibold">Fast & Fun</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎨</div>
                  <p className="font-semibold">Beautiful UI</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <p className="font-semibold">Responsive</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
