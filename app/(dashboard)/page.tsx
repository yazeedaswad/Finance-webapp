"use client";

import { useGetAccounts } from "@/features/accounts/api/use-accounts";

export default function Home(){
  const accountsQuery = useGetAccounts();

  return (
    <div>
      {accountsQuery.data?.map((account) => (
        <div key={account.id}>{account.name}</div>
      ))}
      
    </div>

    
  )
}