import React, { useState } from 'react';
import { 
  MessageSquare, 
  FileBox, 
  Database, 
  Network, 
  Settings, 
  Search,
  Bell,
  User,
  LayoutDashboard
} from 'lucide-react';
import { cn } from './lib/utils';
import { QueryModule } from './components/modules/QueryModule';
import { ReportModule } from './components/modules/ReportModule';
import { SourceModule } from './components/modules/SourceModule';
import { AnalysisModule } from './components/modules/AnalysisModule';

const DOMAINS = ['财务', '采购', '物资', '人资', '战略', '经管'];
const MODULES = [
  { id: 'query', label: '智能问数', icon: MessageSquare },
  { id: 'report', label: '智能报告', icon: FileBox },
  { id: 'source', label: '数据接入', icon: Database },
  { id: 'analysis', label: '分析可视化', icon: Network },
];

export default function App() {
  const [activeModule, setActiveModule] = useState('query');
  const [activeDomain, setActiveDomain] = useState('财务');

  const renderModule = () => {
    switch (activeModule) {
      case 'query': return <QueryModule domain={activeDomain} />;
      case 'report': return <ReportModule domain={activeDomain} />;
      case 'source': return <SourceModule />;
      case 'analysis': return <AnalysisModule />;
      default: return <QueryModule domain={activeDomain} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F5F5F7] text-slate-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1C1C1E] text-slate-300 flex flex-col border-r border-[#38383A]">
        <div className="h-16 flex items-center px-6 border-b border-[#38383A]">
          <LayoutDashboard className="w-6 h-6 mr-3 text-blue-400" />
          <span className="font-semibold text-lg text-white">DataNexus UI</span>
        </div>
        
        <div className="flex-1 py-6 px-3 space-y-1">
          <div className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            核心模块
          </div>
          {MODULES.map((mod) => {
            const Icon = mod.icon;
            const isActive = activeModule === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                className={cn(
                  "w-full flex items-center px-3 py-2.5 rounded-lg text-sm transition-colors",
                  isActive 
                    ? "bg-blue-500/10 text-blue-400 font-medium" 
                    : "hover:bg-[#2C2C2E] hover:text-white"
                )}
              >
                <Icon className="w-5 h-5 mr-3" />
                {mod.label}
              </button>
            );
          })}
        </div>
        
        <div className="p-4 border-t border-[#38383A]">
          <button className="flex items-center text-sm hover:text-white transition-colors">
            <Settings className="w-5 h-5 mr-3" />
            系统设置
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="text-slate-500 text-sm font-medium mr-2">业务领域:</span>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {DOMAINS.map((domain) => (
                <button
                  key={domain}
                  onClick={() => setActiveDomain(domain)}
                  className={cn(
                    "px-3 py-1.5 text-sm rounded-md transition-all font-medium",
                    activeDomain === domain
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  )}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="全局搜索..." 
                className="pl-9 pr-4 py-1.5 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all w-64"
              />
            </div>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <User className="w-5 h-5" />
            </div>
          </div>
        </header>

        {/* Dynamic Module Content */}
        <div className="flex-1 overflow-auto p-6 bg-[#F5F5F7]">
          {renderModule()}
        </div>
      </main>
    </div>
  );
}
