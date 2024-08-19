import {
  Button,
  Card,
  Input,
  Avatar,
  Switch,
  Tabs,
  TabsContent,
  UseProfilePanel,
} from '@sharknado/shared-ui';

import styles from './page.module.css';
// import { useState } from 'react';
import { CircleUser, Mail, Settings, UserCircle } from 'lucide-react';

export default function AccountDashboard() {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={` `}>
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            My Account
          </h1>
        </div>

        {/* Personal Information */}
        <UseProfilePanel />

        {/* Account Security */}
        <Card className="mb-6 p-4">
          <h3 className="text-lg font-semibold mb-4">Account Security</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              {/* <Lock className="text-gray-500 dark:text-gray-400" /> */}
              <Input type="password" placeholder="Change Password" />
              <Button>Update</Button>
            </div>
            <div className="flex items-center space-x-4">
              <Settings className="text-gray-500 dark:text-gray-400" />
              <p className="text-gray-600 dark:text-gray-300">
                Two-Factor Authentication
              </p>
              <Switch checked={true} />
            </div>
          </div>
        </Card>

        {/* Notifications & Preferences */}
        <Card className="mb-6 p-4">
          <h3 className="text-lg font-semibold mb-4">
            Notifications & Preferences
          </h3>
          <Tabs>
            <TabsContent value="Email Notifications">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Receive project updates
                  </p>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Receive security alerts
                  </p>
                  <Switch checked={false} />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="System Alerts">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <UserCircle className="text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-300">
                    System maintenance alerts
                  </p>
                  <Switch checked={true} />
                </div>
                <div className="flex items-center space-x-4">
                  <UserCircle className="text-gray-500 dark:text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Critical system updates
                  </p>
                  <Switch checked={true} />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Recent Activity */}
        <Card className="mb-6 p-4">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-300">
                Added new user John Doe
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                2 days ago
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-300">
                Updated permissions for Jane Smith
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                1 week ago
              </span>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="text-gray-600 dark:text-gray-400 text-sm text-center py-4">
          &copy; 2024 Admin Portal. All rights reserved.
        </div>
      </div>
    </div>
  );
}
