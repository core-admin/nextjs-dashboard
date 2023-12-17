import DashboardSkeleton from '@/app/ui/skeletons';

/**
 * 当 page.tsx 内部代码无阻塞时，当前的Loading组件基本没啥用了
 */
export default function Loading() {
  return <h1>Loading...</h1>;
}
