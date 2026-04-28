import React from 'react';
import { GitMerge, Map, Activity, Play, Eye, Share2, ZoomIn, ZoomOut, Maximize } from 'lucide-react';
import { cn } from '../../lib/utils';

export function AnalysisModule() {
  // A mock node structure to render a nice CSS-based flow
  return (
    <div className="flex flex-col h-full space-y-4">
      {/* Top Header */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200 shrink-0">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Map className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-800">利润下降归因分析树</h2>
            <p className="text-xs text-slate-500 mt-0.5">自动推演过程 · 包含业务条线、区域及成本因素</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-md transition-colors"><ZoomIn className="w-4 h-4"/></button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-md transition-colors"><ZoomOut className="w-4 h-4"/></button>
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-md transition-colors"><Maximize className="w-4 h-4"/></button>
          <div className="w-px h-6 bg-slate-200 mx-2 self-center"></div>
          <button className="flex items-center px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
            <Share2 className="w-4 h-4 mr-2" />
            分享看板
          </button>
          <button className="flex items-center px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors">
            <Play className="w-4 h-4 mr-2 fill-white" />
            演示故事板
          </button>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 bg-white border border-slate-200 rounded-xl relative overflow-hidden flex items-center justify-center p-8 diagram-bg">
        
        {/* Background Dot Grid for canvas feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

        {/* CSS-based Mock MindMap / Flow */}
        <div className="relative z-10 flex flex-col items-center select-none w-full max-w-4xl">
          
          {/* Level 1 */}
          <div className="bg-red-50 border-2 border-red-200 p-4 rounded-xl shadow-sm text-center relative z-20 w-64 border-l-4 border-l-red-500">
            <div className="text-red-700 font-bold mb-1">集团整体净利润下降</div>
            <div className="text-red-600/80 text-sm font-mono">-12.4% (同比)</div>
            <div className="absolute -bottom-10 left-1/2 w-0.5 h-10 bg-slate-300"></div>
          </div>

          {/* Level 2 Row */}
          <div className="flex justify-between w-full mt-10 relative">
            <div className="absolute top-0 left-1/4 right-1/4 h-0.5 bg-slate-300"></div>
            
            {/* L2 Node 1 */}
            <div className="flex flex-col items-center relative w-1/2">
              <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-slate-300"></div>
              <div className="bg-white border border-slate-200 p-4 rounded-xl shadow-sm w-56 relative z-20 hover:border-purple-300 cursor-pointer transition-colors border-l-4 border-l-orange-400">
                <div className="text-slate-800 font-semibold mb-1">营业收入变化</div>
                <div className="text-slate-500 text-sm font-mono">+2.1% (基本持平)</div>
              </div>
            </div>

            {/* L2 Node 2 */}
            <div className="flex flex-col items-center relative w-1/2">
              <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-slate-300"></div>
              <div className="bg-red-50 border border-red-200 p-4 rounded-xl shadow-sm w-56 relative z-20 hover:border-red-300 cursor-pointer transition-colors border-l-4 border-l-red-500">
                <div className="text-slate-800 font-semibold mb-1">营业总成本增加</div>
                <div className="text-red-600 text-sm font-mono">+18.5% ⚠️</div>
                <div className="absolute -bottom-10 left-1/2 w-0.5 h-10 bg-slate-300"></div>
              </div>
            </div>
          </div>

          {/* Level 3 Row */}
          <div className="flex justify-end w-full mt-10 relative">
             <div className="absolute top-0 left-1/2 right-[12.5%] h-0.5 bg-slate-300"></div>
             
             {/* L3 Node 1 */}
             <div className="flex flex-col items-center relative w-1/4">
              <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-slate-300"></div>
              <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-sm w-44 hover:border-purple-300 cursor-pointer transition-colors">
                <div className="text-slate-700 font-medium text-sm">人力成本</div>
                <div className="text-slate-500 text-xs mt-1">+3.2%</div>
              </div>
            </div>

            {/* L3 Node 2 */}
            <div className="flex flex-col items-center relative w-1/4">
              <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-slate-300"></div>
              <div className="bg-red-50 border border-red-200 p-3 rounded-lg shadow-sm w-44 hover:border-red-300 cursor-pointer transition-colors outline outline-2 outline-offset-2 outline-red-400">
                <div className="flex items-center justify-between">
                  <div className="text-slate-800 font-medium text-sm">采购成本 (原材料)</div>
                  <Eye className="w-3.5 h-3.5 text-red-500" />
                </div>
                <div className="text-red-600 text-xs mt-1 font-bold">+35.8% (大宗商品价格极速上涨)</div>
              </div>
            </div>

            {/* L3 Node 3 */}
            <div className="flex flex-col items-center relative w-1/4">
              <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-slate-300"></div>
              <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-sm w-44 hover:border-purple-300 cursor-pointer transition-colors">
                <div className="text-slate-700 font-medium text-sm">营销与管理费用</div>
                <div className="text-slate-500 text-xs mt-1">-5.1%</div>
              </div>
            </div>
          </div>

        </div>

        {/* Legend / Overlay info */}
        <div className="absolute bottom-6 bg-white/80 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-6">
          <div className="flex items-center text-xs text-slate-600">
            <span className="w-3 h-3 bg-red-100 border border-red-300 rounded mr-2 inline-block"></span>
            关键异常因素 (Root Cause)
          </div>
          <div className="flex items-center text-xs text-slate-600">
            <span className="w-3 h-3 bg-white border border-slate-300 rounded mr-2 inline-block"></span>
            常态波动节点
          </div>
        </div>

      </div>
    </div>
  );
}
