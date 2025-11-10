"use client"

import { useState } from "react"
import { Bell, Lock, Eye, Palette, LogOut } from "lucide-react"
import Sidebar from "@/components/home/sidebar"
import MobileNav from "@/components/home/mobile-nav"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: true,
      mentions: true,
      comments: true,
    },
    privacy: {
      isPublic: true,
      allowMessages: true,
      showActivity: true,
    },
    theme: "dark",
  })

  const handleToggle = (category: string, setting: string) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],\
        [setting]: !prev[category as keyof typeof prev][setting as keyof typeof prev[category as keyof typeof prev]]
      }
    }));
  }

  const settingsSections = [
    {
      title: "Notifications",
      icon: Bell,
      items: [
        {
          label: "Email Notifications",
          description: "Receive updates via email",
          setting: "email",
          category: "notifications",
        },
        {
          label: "Push Notifications",
          description: "Receive browser notifications",
          setting: "push",
          category: "notifications",
        },
        {
          label: "Mention Alerts",
          description: "Get notified when someone mentions you",
          setting: "mentions",
          category: "notifications",
        },
        {
          label: "Comment Notifications",
          description: "Get notified when someone comments on your posts",
          setting: "comments",
          category: "notifications",
        },
      ],
    },
    {
      title: "Privacy & Safety",
      icon: Lock,
      items: [
        {
          label: "Public Profile",
          description: "Allow others to see your profile",
          setting: "isPublic",
          category: "privacy",
        },
        {
          label: "Allow Messages",
          description: "Allow anyone to send you messages",
          setting: "allowMessages",
          category: "privacy",
        },
        {
          label: "Show Activity Status",
          description: "Let others see when you're online",
          setting: "showActivity",
          category: "privacy",
        },
      ],
    },
  ]

  return (
    <div className="flex bg-[var(--color-bg-primary)] min-h-screen pb-20 lg:pb-0">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 xl:mr-72">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-[var(--color-text-secondary)]">Manage your account preferences and privacy</p>
          </div>

          {/* Settings Sections */}
          <div className="space-y-6">
            {settingsSections.map((section) => {
              const Icon = section.icon
              return (
                <div
                  key={section.title}
                  className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon size={24} className="text-[var(--color-primary)]" />
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>

                  <div className="space-y-4">
                    {section.items.map((item) => (
                      <div
                        key={`${item.category}-${item.setting}`}
                        className="flex items-center justify-between p-4 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)]"
                      >
                        <div>
                          <h3 className="font-medium">{item.label}</h3>
                          <p className="text-sm text-[var(--color-text-tertiary)]">{item.description}</p>
                        </div>
                        <button
                          onClick={() => handleToggle(item.category, item.setting)}
                          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                            settings[item.category as keyof typeof settings][item.setting as any]
                              ? "bg-[var(--color-primary)]"
                              : "bg-[var(--color-border)]"
                          }`}
                        >
                          <span
                            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                              settings[item.category as keyof typeof settings][item.setting as any]
                                ? "translate-x-7"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Theme Settings */}
            <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <Palette size={24} className="text-[var(--color-primary)]" />
                <h2 className="text-xl font-bold">Appearance</h2>
              </div>

              <div className="space-y-3">
                {["Light", "Dark", "Auto"].map((theme) => (
                  <label
                    key={theme}
                    className="flex items-center p-4 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] cursor-pointer hover:border-[var(--color-primary)]/50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="theme"
                      value={theme.toLowerCase()}
                      checked={settings.theme === theme.toLowerCase()}
                      onChange={(e) => setSettings((prev) => ({ ...prev, theme: e.target.value }))}
                      className="mr-3"
                    />
                    <span className="font-medium">{theme} Mode</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Account Section */}
            <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Account</h2>

              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-4 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] hover:border-[var(--color-primary)]/50 transition-colors text-[var(--color-text-primary)]">
                  <Eye size={20} />
                  <span>Change Password</span>
                </button>

                <button className="w-full flex items-center gap-3 p-4 bg-[var(--color-bg-primary)] rounded-lg border border-[var(--color-border)] hover:border-red-500/50 transition-colors text-red-400 hover:bg-red-500/10">
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  )
}
