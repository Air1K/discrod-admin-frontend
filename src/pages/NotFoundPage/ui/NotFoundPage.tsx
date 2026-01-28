import { Link } from 'react-router'
import { AlertTriangle, Home, Sparkles } from 'lucide-react'

import { Button } from '@/shared/ui/shadcn/Button'

export default function NotFoundPage() {
  return (
    <div className="min-h-dvh">
      {/* Static background */}
      <div aria-hidden className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-background" />

        {/* Gradient grid / glow */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-28 -right-28 h-[520px] w-[520px] rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/20 blur-3xl" />
        </div>

        {/* Subtle pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--foreground)/0.06)_1px,transparent_0)] bg-size-[22px_22px] opacity-50" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background" />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10 min-h-dvh overflow-y-auto">
        <div className="mx-auto flex min-h-dvh max-w-5xl items-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-sm text-muted-foreground shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4" />
                <span>Discord Admin</span>
              </div>

              <div className="rounded-3xl border bg-card/60 p-6 shadow-sm backdrop-blur sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border bg-card/70 shadow-sm backdrop-blur">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      Страница не найдена
                    </h1>
                    <p className="text-muted-foreground">
                      Мы не смогли найти запрошенный маршрут. Проверьте правильность адреса и
                      попробуйте снова.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Если вы перешли по сохранённой ссылке, страница могла быть перемещена или
                      удалена.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button asChild size="lg" className="rounded-2xl">
                    <Link to="/">
                      <Home className="mr-2 h-4 w-4" />
                      На главную
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
