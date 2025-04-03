import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type UseAuthFetchOptionsProps = {
  redirectTo?: string;
  showSuccess?: boolean;
};

export function useAuthFetchOptions({
  redirectTo = '/dashboard',
  showSuccess = false,
}: UseAuthFetchOptionsProps = {}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const fetchOptions = {
    onResponse: () => {
      setLoading(false);
    },
    onRequest: () => {
      setLoading(true);
    },
    onError: (ctx: { error: { message: string } }) => {
      toast.error(ctx.error.message);
    },
    onSuccess: async () => {
      if (showSuccess) {
        setSuccess(true);
        setTimeout(() => {
          router.push(redirectTo);
        }, 5000);
      } else if (redirectTo) {
        router.push(redirectTo);
      }
    },
  };

  const socialFetchOptions = {
    onResponse: () => {
      setSocialLoading(false);
    },
    onRequest: () => {
      setSocialLoading(true);
    },
    onError: (ctx: { error: { message: string } }) => {
      toast.error(ctx.error.message);
    },
  };

  return {
    fetchOptions,
    socialFetchOptions,
    loading,
    socialLoading,
    success,
  };
}
