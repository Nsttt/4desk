import { createSignal } from "solid-js";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  {
    name: "Directory",
    href: "#",
    current: false,
  },
  { name: "Announcements", href: "#", current: false },
  { name: "Office Map", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = createSignal(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full overflow-hidden">
        ```
      */}
      <div class="flex h-full">
        {/* Static sidebar for desktop */}
        <div class="hidden lg:flex lg:flex-shrink-0">
          <div class="flex w-64 flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div class="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-gray-100">
              <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                <div class="flex flex-shrink-0 items-center px-4">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <nav class="mt-5 flex-1" aria-label="Sidebar">
                  <div class="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        href={item.href}
                        class={classNames(
                          item.current
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
                <a href="#" class="group block w-full flex-shrink-0">
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-9 w-9 rounded-full"
                        src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                        Whitney Francis
                      </p>
                      <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
          <div class="lg:hidden">
            <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
              <div>
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
              </div>
              <div>
                <button
                  type="button"
                  class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span class="sr-only">Open sidebar</span>
                </button>
              </div>
            </div>
          </div>
          <div class="relative z-0 flex flex-1 overflow-hidden">
            <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none">
              {/* Start main area*/}
              <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div class="h-full rounded-lg border-2 border-dashed border-gray-200" />
              </div>
              {/* End main area */}
            </main>
            <aside class="relative hidden w-96 flex-shrink-0 overflow-y-auto border-l border-gray-200 xl:flex xl:flex-col">
              {/* Start secondary column (hidden on smaller screens) */}
              <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div class="h-full rounded-lg border-2 border-dashed border-gray-200" />
              </div>
              {/* End secondary column */}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
