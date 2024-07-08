import React from 'react'
import { Button } from './button'
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
    SheetFooter
  } from "@/components/ui/sheet"
 
  import { Label } from "@/components/ui/label"
export const Createaccountbutton = () => {
  return (
    <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" className="bg-blue-500 text-white">Open</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create account</SheetTitle>
        <SheetDescription>
          Name your account
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          
          <Input id="username" value="Savings, Credit card etc.." className="col-span-3" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit" className="bg-blue-500 text-white">Create</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
  )
}

