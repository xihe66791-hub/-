import React, { useState } from 'react';
import { Send, Sparkles, TrendingUp, AlertTriangle, ChevronRight, BarChart2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function QueryModule({ domain }: { domain: string }) {
  const [query, setQuery] = useState('');

  const mockData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
  ];

  const suggestions = [
    `${domain}核心指标概览`,
    `上月${domain}异常数据检测`,
    `按部门查看${domain}趋势`,
  ];

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Content Area */}
      <div className="flex-1 overflow-auto p-6 flex flex-col space-y-6">
        
        {/* Assistant Greeting */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-blue-600" />
          </div>
          <div className="bg-slate-50 rounded-2xl p-4 max-w-2xl border border-slate-100">
            <p className="text-slate-800 font-medium mb-2">你好，我是您的智能数据助手。</p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              当前业务领域为<span className="text-blue-600 font-semibold mx-1">{domain}</span>。
              您可以支持自然语言多轮问答、异常检测以及多维度下钻分析。请问您想了解什么？
            </p>
            
            <div className="flex flex-wrap gap-2">
              {suggestions.map((text, i) => (
                <button key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors">
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mock Query Response */}
        <div className="flex items-start space-x-4 flex-row-reverse">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center ml-4">
            <span className="text-slate-500 font-medium text-sm">Me</span>
          </div>
          <div className="bg-blue-600 text-white rounded-2xl p-4 max-w-2xl shadow-sm">
            <p className="text-sm">帮我分析一下近半年{domain}的核心趋势及异常点。</p>
          </div>
        </div>

        {/* Assistant Chart Response */}
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-blue-600" />
          </div>
          <div className="bg-white rounded-2xl p-5 w-full max-w-4xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-slate-800 flex items-center">
                <BarChart2 className="w-4 h-4 mr-2 text-blue-500" />
                近半年{domain}趋势概览
              </h3>
              <div className="flex space-x-2">
                <span className="inline-flex items-center px-2 py-1 rounded bg-red-50 text-red-600 text-xs font-medium">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  识别到 1 处异常
                </span>
                <span className="inline-flex items-center px-2 py-1 rounded bg-green-50 text-green-600 text-xs font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  整体稳定
                </span>
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-700">
              <p className="mb-2 font-medium">分析摘要：</p>
              <ul className="list-disc list-inside space-y-1 text-slate-600 marker:text-slate-400">
                <li>趋势：经检测，从三月起指标出现短期波动，但七月份有显著回升。</li>
                <li><span className="text-red-500">异常：五月份出现显著下探，系统判定为异常点（置信度92%），建议点击此处下钻查看明细数据。</span></li>
                <li>预测：基于历史数据，下月预计将保持平稳增长，增幅约 5.2%。</li>
              </ul>
            </div>
            
            <button className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-700 transition-colors">
              深入下钻多维度分析 <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-slate-200 bg-slate-50 shrink-0">
        <div className="max-w-4xl mx-auto relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="用自然语言描述您的分析需求，例如：对比华南区和华北区的各项成本差异..."
            className="w-full bg-white border border-slate-300 rounded-full py-3 pl-6 pr-14 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-sm shadow-sm"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md">
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="max-w-4xl mx-auto mt-2 flex justify-between items-center text-xs text-slate-400">
          <span>支持解析专业名词、自动多维度展开。</span>
          <span>按 Enter 键发送</span>
        </div>
      </div>
    </div>
  );
}
