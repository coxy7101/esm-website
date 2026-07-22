export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <div className="size-3 animate-bounce rounded-full bg-[#D62839] [animation-delay:-0.3s]" />
          <div className="size-3 animate-bounce rounded-full bg-[#F4A020] [animation-delay:-0.15s]" />
          <div className="size-3 animate-bounce rounded-full bg-brand-green" />
        </div>
        <span className="text-sm font-medium text-muted-foreground">Loading...</span>
      </div>
    </div>
  );
}
