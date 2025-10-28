import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Save, User as UserIcon, Bell, Shield, Link as LinkIcon } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import LoadingSpinner from '../components/LoadingSpinner';

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
});

type ProfileFormData = z.infer<typeof profileSchema>;

function Settings() {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'security' | 'integrations'>('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const { user, updateUser } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    setIsLoading(true);
    setSuccessMessage('');

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      updateUser(data);
      setSuccessMessage('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: UserIcon },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'integrations', name: 'Integrations', icon: LinkIcon },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="card">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h2>
                
                {successMessage && (
                  <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                    {successMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="input"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="input"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Avatar
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                        <UserIcon className="w-8 h-8 text-white" />
                      </div>
                      <button type="button" className="btn btn-secondary">
                        Change Avatar
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="btn btn-primary flex items-center gap-2"
                    >
                      {isLoading ? (
                        <LoadingSpinner size="sm" />
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  {['Email notifications', 'Push notifications', 'Weekly reports', 'Performance alerts'].map((item) => (
                    <div key={item} className="flex items-center justify-between py-3 border-b border-gray-200">
                      <span className="text-sm text-gray-700">{item}</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <input type="password" placeholder="Current password" className="input" />
                      <input type="password" placeholder="New password" className="input" />
                      <input type="password" placeholder="Confirm new password" className="input" />
                      <button className="btn btn-primary">Update Password</button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Add an extra layer of security to your account
                    </p>
                    <button className="btn btn-secondary">Enable 2FA</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'integrations' && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-6">Connected Platforms</h2>
                <div className="space-y-4">
                  {[
                    { name: 'Twitter', connected: true },
                    { name: 'Facebook', connected: true },
                    { name: 'Instagram', connected: false },
                    { name: 'LinkedIn', connected: true },
                  ].map((platform) => (
                    <div
                      key={platform.name}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">{platform.name}</h3>
                        <p className="text-sm text-gray-500">
                          {platform.connected ? 'Connected' : 'Not connected'}
                        </p>
                      </div>
                      <button
                        className={`btn ${
                          platform.connected ? 'btn-secondary' : 'btn-primary'
                        }`}
                      >
                        {platform.connected ? 'Disconnect' : 'Connect'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
