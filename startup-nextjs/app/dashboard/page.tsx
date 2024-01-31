import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

import Image from "next/image"

const Dashboard = () => {
    return (
        <section className="container flex justify-between h-screen mt-24 pt-5">
            <div className="w-[40%] border-r">
                <div className="flex items-center gap-3">
                    <div>
                        <Image
                            src={`https://ui-avatars.com/api/?name=Swapnil`}
                            alt="user logo"
                            width={35}
                            height={35}
                            className="border-2 border-black rounded-full"
                        />
                    </div>
                    <h3 className="text-lg font-medium">Swapnil Vishwakarma</h3>
                </div>
                <div className="mt-3 text-body-color">
                    <p><span className="font-medium text-black dark:text-white">DOB : </span>18 aug 2003</p>
                    <p><span className="font-medium text-black dark:text-white">Gender : </span>Male</p>
                    {/* <p><span className="font-medium text-black">Phone : </span>1234567890</p> */}
                </div>
            </div>
            
            <div className="w-full ml-1">
                <div className="flex items-center justify-between mx-3">
                    <h3 className="font-medium">Medical History</h3>
                <Button variant="outline">Button</Button>
                </div>
                <Table className="mt-2 border">
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader className="bg-gray-700">
                        <TableRow>
                            <TableHead className="w-[100px] text-white">Date</TableHead>
                            <TableHead className="text-white">Status</TableHead>
                            {/* <TableHead>Method</TableHead> */}
                            <TableHead className="text-right text-white">Lab Name</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">31/01/2024</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell className="text-right">Lorem ipsum dolor sit amet consectetur.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">31/01/2024</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell className="text-right">Lorem ipsum dolor sit amet consectetur.</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">31/01/2024</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell className="text-right">Lorem ipsum dolor sit amet consectetur.</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </section>
    )
}

export default Dashboard