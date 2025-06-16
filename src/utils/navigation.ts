'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function useDefaultTabRedirect(defaultTab: string, basePath: string = '/home') {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const mode = searchParams.get('display');
    if (mode === null) {
      router.push(`${basePath}?display=${defaultTab}`);
    }
  }, [router, searchParams, defaultTab, basePath]);
}
