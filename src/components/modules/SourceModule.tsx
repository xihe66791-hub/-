import React from 'react';
import { Database, Plus, RefreshCw, Server, FileBox, Wifi, ShieldCheck, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

export function SourceModule() {
  const sources = [
    { id: 1, name: 'Core ERP (Oracle)', type: 'Oracle DB', status: 'connected', lastSync: '10分钟前', icon: Database, color: 'text-orange-500', group: '关系型数据库' },
    { id: 2, name: '财务凭证库 (MySQL)', type: 'MySQL', status: 'connected', lastSync: '2小时前', icon: Server, color: 'text-blue-500', group: '关系型数据库' },
    { id: 3, name: '数仓汇总表 (ClickHouse)', type: 'OLAP', status: 'syncing', lastSync: '正在同步...', icon: Database, color: 'text-yellow-500', group: '数据仓库' },
    { id: 4, name: '用户行为日志流', type: 'Kafka', status: 'connected', lastSync: '实时流', icon: Wifi, color: 'text-green-500', group: '实时数据流' },
    { id: 5, name: '外部行业对标数据', type: 'REST API', status: 'error', lastSync: '昨天 18:00', icon: Globe, color: 'text-purple-500', group: 'API接口' },
    { id: 6, name: '人工维护预算表.xlsx', type: 'File', status: 'connected', lastSync: '本月初', icon: FileBox, color: 'text-emerald-500', group: '文件数据' },
  ];

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'connected': return <span className="flex w-2.5 h-2.5 rounded-full bg-green-500"></span>;
      case 'syncing': return <span className="flex w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>;
      case 'error': return <span className="flex w-2.5 h-2.5 rounded-full bg-red-500"></span>;
      default: return <span className="flex w-2.5 h-2.5 rounded-full bg-slate-300"></span>;
    }
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      
      {/* Top Controls */}
      <div className="flex flex-wrap justify-between items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h2 className="text-lg font-semibold text-slate-800 flex items-center">
            多源异构数据接入
            <ShieldCheck className="w-5 h-5 ml-2 text-green-500" />
          </h2>
          <p className="text-sm text-slate-500 mt-1">管理各业务领域的数据连接、ETL调度和权限控制</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-lg transition-colors">
            <RefreshCw className="w-4 h-4 mr-2" />
            全局同步
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            新建数据源
          </button>
        </div>
      </div>

      {/* Grid view */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {sources.map((src) => {
          const Icon = src.icon;
          return (
            <div key={src.id} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className={cn("p-2.5 rounded-lg bg-slate-50 border border-slate-100", src.color)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 line-clamp-1" title={src.name}>{src.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{src.group}</p>
                  </div>
                </div>
                {getStatusDot(src.status)}
              </div>
              
              <div className="flex flex-col space-y-3 pt-3 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">连接类型</span>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-700">{src.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500">最后同步</span>
                  <span className={cn(
                    "text-xs font-medium",
                    src.status === 'error' ? 'text-red-500' : 'text-slate-700'
                  )}>
                    {src.lastSync}
                  </span>
                </div>
              </div>

              <div className="flex space-x-2 mt-5">
                <button className="flex-1 text-xs py-1.5 border border-slate-200 rounded text-slate-600 hover:bg-slate-50">配置</button>
                <button className="flex-1 text-xs py-1.5 border border-slate-200 rounded text-slate-600 hover:bg-slate-50">清洗规则</button>
                <button className="flex-1 text-xs py-1.5 bg-slate-100 rounded text-blue-600 font-medium hover:bg-slate-200">去探索</button>
              </div>
            </div>
          )
        })}

        {/* Add New Placeholder */}
        <div className="bg-transparent border-2 border-dashed border-slate-300 rounded-xl p-5 flex flex-col items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-500 hover:bg-blue-50/50 cursor-pointer transition-colors min-h-[220px]">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
            <Plus className="w-6 h-6" />
          </div>
          <span className="font-medium">接入更多数据源</span>
          <span className="text-xs mt-1 text-slate-400">支持数据库、API、Excel等</span>
        </div>
      </div>

    </div>
  );
}
