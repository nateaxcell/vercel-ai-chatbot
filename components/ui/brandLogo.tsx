"use client"

import * as React from "react"
import Image from 'next/image'
 
export function BrandLogo() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  console.log(user)
  return (
    <div className="flex items-center">
              <Image
      src="/unicorn_logo.png"
      width={100}
      height={100}
      alt="Picture of the author"
    />
        <div className="flex flex-col px-4">
            <p className="text-3xl font-semibold">{user.org_name}</p>
            <span className="text-xs text-purple-300">Supercharge your day with Ai</span>
        </div>

    </div>
  )
}
