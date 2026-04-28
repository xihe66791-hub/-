import React from 'react';
import { FileText, Clock, Settings2, Download, FileJson, LayoutTemplate, MoreVertical } from 'lucide-react';
import { cn } from '../../lib/utils';

export function ReportModule({ domain }: { domain: string }) {
  const templates: Record<string, any[]> = {
    '财务': [
      { id: 1, name: '月度财务执行报告', type: 'PDF / Word', freq: '每月', tags: ['标准报表', '全自动'] },
      { id: 2, name: '成本深度分析报告', type: 'PPT', freq: '按需', tags: ['归因分析', '高管专属'] },
      { id: 3, name: '预算执行与决算报告', type: 'Excel', freq: '每季', tags: ['明细数据'] },
    ],
    '采购': [
      { id: 4, name: '供应商综合评估报告', type: 'PDF', freq: '年度', tags: ['模型生成'] },
      { id: 5, name: '采购效率周报', type: 'Word', freq: '每周', tags: ['时效监控'] },
    ],
    '物资': [
      { id: 6, name: '库存周转率分析', type: 'PPT', freq: '每月', tags: ['效率告警'] },
      { id: 7, name: '物资消耗统计报表', type: 'Excel', freq: '每周', tags: ['明细追踪'] },
    ],
    '人资': [
      { id: 8, name: '人力结构与薪酬分析', type: 'PDF', freq: '季度', tags: ['合规审查'] },
      { id: 9, name: '组织效能评估', type: 'PPT', freq: '年度', tags: ['战略联动'] },
    ],
    '战略': [
      { id: 10, name: '战略目标达成评估', type: 'PDF', freq: '每月', tags: ['OKR看板'] },
      { id: 11, name: '市场占有率与竞品分析', type: 'Word / PPT', freq: '每季', tags: ['外部数据'] },
    ],
    '经管': [
      { id: 12, name: 'KPI指标专项报告', type: 'PDF', freq: '每周', tags: ['动态生成'] },
      { id: 13, name: '经营异常风险预警', type: 'Word', freq: '实时', tags: ['规则触发'] },
    ]
  };

  const domainTemplates = templates[domain] || templates['财务'];

  return (
    <div className="flex flex-col h-full space-y-6">
      
      {/* Top controls */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">智能报告生成中心</h2>
          <p className="text-sm text-slate-500 mt-1">基于最新数据，自动分析并生成专业领域报告</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-lg transition-colors">
            <LayoutTemplate className="w-4 h-4 mr-2" />
            新建自定义模板
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors">
            <FileText className="w-4 h-4 mr-2" />
            一键生成{domain}主报告
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Side: Templates List */}
        <div className="col-span-1 md:col-span-2 space-y-4">
          <h3 className="font-semibold text-slate-700 flex items-center">
            <FileJson className="w-5 h-5 mr-2 text-slate-400"/>
            预置报告模板池 ({domain})
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {domainTemplates.map((t) => (
              <div key={t.id} className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all group flex flex-col justify-between h-40 cursor-pointer">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-1">{t.name}</h4>
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    {t.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] rounded border border-slate-200 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 pb-1 border-t border-slate-100 pt-3">
                  <span className="text-xs text-slate-500 font-mono">{t.type}</span>
                  <div className="flex items-center text-xs text-slate-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {t.freq}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Quick Config & History */}
        <div className="col-span-1 space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700 mb-4 flex items-center">
              <Settings2 className="w-4 h-4 mr-2" />
              全局输出设置
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-600">默认导出格式</label>
                <select className="w-full text-sm border-slate-200 rounded-md bg-slate-50 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                  <option>PDF文档 (带水印)</option>
                  <option>Word (可编辑分析结论)</option>
                  <option>PowerPoint (汇报演示)</option>
                  <option>Excel (附带原始数据源)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-medium text-slate-600">分发策略</label>
                <div className="flex flex-col space-y-2">
                  <label className="flex items-center space-x-2 text-sm text-slate-700">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span>生成后发送至工作群组</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm text-slate-700">
                    <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                    <span>系统消息通知相关负责人</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700 mb-4 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              近期生成记录
            </h3>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer group">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">{domain}综合评估_2023Q{4-i}</span>
                    <span className="text-xs text-slate-400 mt-0.5">今天 10:{i}4 AM</span>
                  </div>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
