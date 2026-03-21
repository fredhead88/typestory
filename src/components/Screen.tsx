export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 items-center justify-center px-4">
      <div className="w-full max-w-[640px]">{children}</div>
    </div>
  );
}
