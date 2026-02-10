"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Plus, Trash2, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import toast from "react-hot-toast";

interface Address {
    id: string;
    type: 'Home' | 'Work' | 'Other';
    name: string;
    phone: string;
    street: string;
    city: string;
    state: string;
    pincode: string;
}

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  
  // New Address State
  const [newAddress, setNewAddress] = useState<Partial<Address>>({
      type: 'Home'
  });

  useEffect(() => {
    const stored = localStorage.getItem('hbt_addresses');
    if (stored) {
        setAddresses(JSON.parse(stored));
    } else {
        // Default Mock Address
        setAddresses([{
            id: 'addr_1',
            type: 'Home',
            name: 'Affan Raza',
            phone: '9876543210',
            street: '123, Tech Park Road, Whitefield',
            city: 'Bangalore',
            state: 'Karnataka',
            pincode: '560066'
        }]);
    }
  }, []);

  const saveAddresses = (updated: Address[]) => {
      setAddresses(updated);
      localStorage.setItem('hbt_addresses', JSON.stringify(updated));
  };

  const handleDelete = (id: string) => {
      if (confirm("Are you sure you want to delete this address?")) {
          const updated = addresses.filter(a => a.id !== id);
          saveAddresses(updated);
          toast.success("Address deleted");
      }
  };

  const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
      const address: Address = {
          id: 'addr_' + Date.now(),
          type: newAddress.type as any || 'Home',
          name: newAddress.name || '',
          phone: newAddress.phone || '',
          street: newAddress.street || '',
          city: newAddress.city || '',
          state: newAddress.state || '',
          pincode: newAddress.pincode || ''
      };

      const updated = [...addresses, address];
      saveAddresses(updated);
      setIsAdding(false);
      setNewAddress({ type: 'Home' }); // Reset
      toast.success("Address added successfully!");
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
                <Link href="/profile" className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors">
                    <ArrowLeft className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                </Link>
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">Saved Addresses</h1>
            </div>
            {!isAdding && (
                <Button onClick={() => setIsAdding(true)} className="flex items-center gap-2 bg-primary text-white">
                    <Plus className="w-4 h-4" /> Add New
                </Button>
            )}
        </div>

        {isAdding ? (
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 animate-fadeIn">
                <h2 className="text-lg font-bold mb-6 dark:text-white">Add New Address</h2>
                <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1 dark:text-neutral-300">Address Type</label>
                        <div className="flex gap-4">
                            {['Home', 'Work', 'Other'].map(type => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setNewAddress({...newAddress, type: type as any})}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${newAddress.type === type ? 'bg-primary text-white' : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Input placeholder="Full Name" required value={newAddress.name || ''} onChange={e => setNewAddress({...newAddress, name: e.target.value})} />
                    </div>
                     <div>
                        <Input placeholder="Phone Number" required value={newAddress.phone || ''} onChange={e => setNewAddress({...newAddress, phone: e.target.value})} />
                    </div>
                     <div className="md:col-span-2">
                        <Input placeholder="Street Address / Flat No." required value={newAddress.street || ''} onChange={e => setNewAddress({...newAddress, street: e.target.value})} />
                    </div>
                    <div>
                        <Input placeholder="City" required value={newAddress.city || ''} onChange={e => setNewAddress({...newAddress, city: e.target.value})} />
                    </div>
                    <div>
                        <Input placeholder="State" required value={newAddress.state || ''} onChange={e => setNewAddress({...newAddress, state: e.target.value})} />
                    </div>
                    <div>
                        <Input placeholder="Pincode" required value={newAddress.pincode || ''} onChange={e => setNewAddress({...newAddress, pincode: e.target.value})} />
                    </div>
                    
                    <div className="md:col-span-2 flex gap-3 mt-4">
                        <Button type="submit" className="flex-1 bg-primary text-white">Save Address</Button>
                        <Button type="button" variant="outline" onClick={() => setIsAdding(false)} className="flex-1">Cancel</Button>
                    </div>
                </form>
            </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map((addr) => (
                    <div key={addr.id} className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-neutral-700 relative group">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => handleDelete(addr.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors">
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                        
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-700 text-xs font-bold text-neutral-600 dark:text-neutral-300 mb-4">
                            {addr.type === 'Home' && <Home className="w-3 h-3" />}
                            {addr.type === 'Work' && <Briefcase className="w-3 h-3" />}
                            {addr.type === 'Other' && <MapPin className="w-3 h-3" />}
                            {addr.type.toUpperCase()}
                        </div>

                        <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{addr.name}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
                            {addr.street},<br />
                            {addr.city}, {addr.state} - {addr.pincode}<br />
                            Ph: {addr.phone}
                        </p>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
}
