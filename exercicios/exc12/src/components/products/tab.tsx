import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/services/product";

export const ProductsTab = async () => {
    const products = await getAllProducts();

    return (
        <Tabs defaultValue="tab1">
            <TabsList className="flex">
                <TabsTrigger
                    value="tab1"
                    className="flex-1"
                >tab 1</TabsTrigger>
                <TabsTrigger
                    value="tab2"
                    className="flex-1"
                >tab 2</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="mt-6">
                tab 1 content
            </TabsContent>
            <TabsContent value="tab2" className="mt-6">
                tab 2 content
            </TabsContent>
        </Tabs>
    );
}