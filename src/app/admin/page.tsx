"use client";

import { useState, useEffect } from "react";
import { verifyAdmin, getAdminData } from "@/app/actions/admin";
import { formatCurrency } from "@/lib/helpers";
import { Loader2, Lock, LayoutDashboard, ShoppingBag, Users as UsersIcon, LogOut, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import toast from "react-hot-toast";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [accessCode, setAccessCode] = useState("");
    const [data, setData] = useState<any>(null);
    const [activeTab, setActiveTab] = useState<'orders' | 'users'>('orders');

    // Removed session storage check to enforce login on every visit/reload
    /* 
    useEffect(() => {
        const checkAuth = async () => {
             const storedCode = sessionStorage.getItem('adminCode');
             if (storedCode) {
                 await handleLogin(storedCode, true);
             }
        };
        checkAuth();
    }, []);
    */

    const handleLogin = async (code: string) => {
        if (!code) return;
        setIsLoading(true);
        try {
            const isValid = await verifyAdmin(code);
            if (isValid) {
                setIsAuthenticated(true);
                // sessionStorage.setItem('adminCode', code); // Disabled persistence
                // Fetch data immediately
                const dashboardData = await getAdminData(code);
                setData(dashboardData);
                toast.success("Welcome, Admin");
            } else {
                toast.error("Invalid Access Code");
                // sessionStorage.removeItem('adminCode');
            }
        } catch (error) {
            console.error(error);
            toast.error("Login failed");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setData(null);
        setAccessCode("");
        // sessionStorage.removeItem('adminCode');
        toast.success("Logged out");
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex items-center justify-center p-4 transition-colors duration-300">
                <div className="w-full max-w-md bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-8 shadow-xl dark:shadow-2xl">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-500">
                            <Lock size={32} />
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Access</h1>
                        <p className="text-gray-500 dark:text-neutral-400 text-sm mt-2">Enter your secure access code</p>
                    </div>
                    
                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(accessCode); }} className="space-y-4">
                        <Input 
                            type="password" 
                            placeholder="Access Code" 
                            value={accessCode} 
                            onChange={(e) => setAccessCode(e.target.value)}
                            className="bg-gray-50 dark:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-neutral-500 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <Button 
                            type="submit" 
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 font-medium"
                            disabled={isLoading}
                        >
                            {isLoading ? <Loader2 className="animate-spin mr-2" /> : "Access Dashboard"}
                        </Button>
                    </form>
                </div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 flex items-center justify-center text-gray-900 dark:text-white transition-colors duration-300">
                <Loader2 className="animate-spin w-8 h-8 text-blue-600" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-neutral-200 transition-colors duration-300">
            {/* Topbar */}
            <header className="border-b border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">A</div>
                        <span className="font-bold text-gray-900 dark:text-white">HBT Admin</span>
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleLogout} className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-900/20">
                        <LogOut size={18} className="mr-2" /> Logout
                    </Button>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard 
                        title="Total Revenue" 
                        value={formatCurrency(data.stats.totalRevenue)} 
                        icon={<LayoutDashboard className="text-blue-500" />} 
                    />
                    <StatCard 
                        title="Total Orders" 
                        value={data.stats.totalOrders} 
                        icon={<ShoppingBag className="text-purple-500" />} 
                    />
                    <StatCard 
                        title="Registered Users" 
                        value={data.stats.totalUsers} 
                        icon={<UsersIcon className="text-emerald-500" />} 
                    />
                </div>

                {/* Content Tabs */}
                <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm">
                    <div className="flex border-b border-gray-200 dark:border-neutral-800">
                        <TabButton 
                            active={activeTab === 'orders'} 
                            onClick={() => setActiveTab('orders')} 
                            label="Recent Orders" 
                            icon={<ShoppingBag size={18} />}
                        />
                        <TabButton 
                            active={activeTab === 'users'} 
                            onClick={() => setActiveTab('users')} 
                            label="Registered Users" 
                            icon={<UsersIcon size={18} />}
                        />
                    </div>

                    <div className="p-0">
                        {activeTab === 'orders' ? (
                            <OrdersTable orders={data.orders} />
                        ) : (
                            <UsersTable users={data.users} />
                        )}
                    </div>
                </div>

            </main>
        </div>
    );
}

function StatCard({ title, value, icon }: { title: string, value: string | number, icon: React.ReactNode }) {
    return (
        <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-6 rounded-xl flex items-center justify-between shadow-sm transition-colors duration-300">
            <div>
                <p className="text-gray-500 dark:text-neutral-500 text-sm font-medium mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
            </div>
            <div className="w-12 h-12 bg-gray-50 dark:bg-neutral-800 rounded-full flex items-center justify-center">
                {icon}
            </div>
        </div>
    );
}

function TabButton({ active, onClick, label, icon }: { active: boolean, onClick: () => void, label: string, icon: React.ReactNode }) {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors border-b-2 ${
                active 
                ? 'border-blue-500 text-blue-600 dark:text-blue-500 bg-blue-50 dark:bg-blue-500/5' 
                : 'border-transparent text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-800'
            }`}
        >
            {icon}
            {label}
        </button>
    );
}

function OrdersTable({ orders }: { orders: any[] }) {
    if (orders.length === 0) {
        return <div className="p-12 text-center text-gray-500 dark:text-neutral-500">No orders found.</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-neutral-400">
                <thead className="bg-gray-50 dark:bg-neutral-800/50 text-gray-700 dark:text-neutral-200 uppercase text-xs font-semibold">
                    <tr>
                        <th className="px-6 py-4">Order ID</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Customer</th>
                        <th className="px-6 py-4">Items</th>
                        <th className="px-6 py-4">Amount</th>
                        <th className="px-6 py-4">Status</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-800">
                    {orders.map((order) => (
                        <tr key={order._id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/30 transition-colors">
                            <td className="px-6 py-4 font-mono text-xs text-gray-900 dark:text-neutral-300">{order.razorpayOrderId || order._id.slice(-6)}</td>
                            <td className="px-6 py-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                            <td className="px-6 py-4">
                                <div className="text-gray-900 dark:text-white font-medium">{order.customerDetails?.firstName} {order.customerDetails?.lastName}</div>
                                <div className="text-xs">{order.customerDetails?.phone}</div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="max-w-xs truncate" title={order.items?.map((i: any) => i.name).join(', ')}>
                                    {order.items?.length || 0} items
                                </div>
                            </td>
                            <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">{formatCurrency(order.amount)}</td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                                    order.paymentStatus === 'paid' 
                                    ? 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-500' 
                                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-500'
                                }`}>
                                    {order.paymentStatus === 'paid' ? <CheckCircle size={12}/> : <XCircle size={12}/>}
                                    {order.paymentStatus?.toUpperCase() || 'PENDING'}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function UsersTable({ users }: { users: any[] }) {
    if (users.length === 0) {
        return <div className="p-12 text-center text-gray-500 dark:text-neutral-500">No users found.</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-neutral-400">
                <thead className="bg-gray-50 dark:bg-neutral-800/50 text-gray-700 dark:text-neutral-200 uppercase text-xs font-semibold">
                    <tr>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Phone</th>
                        <th className="px-6 py-4">Location</th>
                        <th className="px-6 py-4">Joined</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-800">
                    {users.map((user) => (
                        <tr key={user._id} className="hover:bg-gray-50 dark:hover:bg-neutral-800/30 transition-colors">
                            <td className="px-6 py-4">
                                <div className="text-gray-900 dark:text-white font-medium">{user.firstName} {user.lastName}</div>
                                <div className="text-xs max-w-[200px] truncate" title={user.address}>{user.address}</div>
                            </td>
                            <td className="px-6 py-4">{user.phone}</td>
                            <td className="px-6 py-4">
                                <span>{user.city}, {user.state}</span>
                                <div className="text-xs text-gray-400 dark:text-neutral-500">{user.pincode}</div>
                            </td>
                            <td className="px-6 py-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
