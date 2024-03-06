import React, { MouseEventHandler, useState } from "react";
import "./App.css";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { ModeToggle } from "./components/mode-toggle";
import { Info, MenuIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./components/ui/collapsible";

type Gender = "male" | "female" | "";

const App: React.FC = () => {
  const [weight, setWeight] = useState<number | "">("");
  const [hips, setHips] = useState<number | "">("");
  const [neck, setNeck] = useState<number | "">("");
  const [waist, setWaist] = useState<number | "">("");
  const [heightFeet, setHeightFeet] = useState<number | "">("");
  const [heightInch, setHeightInch] = useState<number | "">("");
  const [abdomen, setAbdomen] = useState<number | "">("");
  const [selectedGender, setSelectedGender] = useState<Gender>("");
  const [bodyFatPercentage, setBodyFatPercentage] = useState<number | "">("");
  const [bodyFat, setBodyFat] = useState<number | "">("");
  // const [bodyMuscle, setBodyMuscle] = useState<number | "">("");

  const calculateBodyFatPercentage = () => {
    const parsedWeight =
      typeof weight === "number" ? weight : parseFloat(weight);
    const parsedHips = typeof hips === "number" ? hips : parseFloat(hips);
    const parsedNeck = typeof neck === "number" ? neck : parseFloat(neck);
    const parsedWaist = typeof waist === "number" ? waist : parseFloat(waist);
    const parsedHeightFeet =
      typeof heightFeet === "number" ? heightFeet : parseFloat(heightFeet);
    const parsedHeightInch = typeof heightInch === "number" ? heightInch : 0;
    const parsedAbdomen =
      typeof abdomen === "number" ? abdomen : parseFloat(abdomen);

    // Check if any of the parsed values are NaN (Not a Number)
    if (
      isNaN(parsedWeight) ||
      (selectedGender === "female" &&
        (isNaN(parsedHips) || isNaN(parsedWaist))) ||
      isNaN(parsedNeck) ||
      isNaN(parsedHeightFeet) ||
      isNaN(parsedHeightInch) ||
      (selectedGender == "male" && isNaN(parsedAbdomen)) ||
      selectedGender == ""
    ) {
      // Handle error or invalid input
      alert("Please give details correctly");
      return;
    }

    const calculatedPercentage =
      selectedGender === "female"
        ? 163.205 * Math.log10(parsedWaist + parsedHips - parsedNeck) -
          97.684 * Math.log10(parsedHeightFeet * 12 + parsedHeightInch) -
          78.387
        : 86.01 * Math.log10(parsedAbdomen - parsedNeck) -
          70.041 * Math.log10(parsedHeightFeet * 12 + parsedHeightInch) +
          36.76;

    setBodyFatPercentage(parseFloat(calculatedPercentage.toFixed(2)));
    setBodyFat(
      parseFloat(((calculatedPercentage / 100) * parsedWeight).toFixed(2))
    );
    // setBodyMuscle((1 - calculatedPercentage / 100) * parsedWeight);
  };

  const redirectToTwitter: MouseEventHandler<HTMLAnchorElement> = (event) => {
    // Prevent the default behavior of the <a> tag
    event.preventDefault();

    // Redirect to Twitter
    window.location.href = "https://twitter.com/jithins4nkar";

    // You can also specify a specific Twitter page:
    // window.location.href = 'https://twitter.com/your_username';

    // If you want to open Twitter in a new tab, you can use:
    // window.open('https://twitter.com', '_blank');
  };
  const redirectToLinkedIn: MouseEventHandler<HTMLAnchorElement> = (event) => {
    // Prevent the default behavior of the <a> tag
    event.preventDefault();

    // Redirect to LinkedIn
    window.location.href = "https://www.linkedin.com/in/jithinsankarnk/";

    // You can also specify a specific LinkedIn page:
    // window.location.href = 'https://LinkedIn.com/your_username';

    // If you want to open LinkedIn in a new tab, you can use:
    // window.open('https://LinkedIn.com', '_blank');
  };
  const redirectToGitHub: MouseEventHandler<HTMLAnchorElement> = (event) => {
    // Prevent the default behavior of the <a> tag
    event.preventDefault();

    // Redirect to GitHub
    window.location.href = "https://github.com/jithinsankar";

    // You can also specify a specific GitHub page:
    // window.location.href = 'https://GitHub.com/your_username';

    // If you want to open GitHub in a new tab, you can use:
    // window.open('https://GitHub.com', '_blank');
  };
  const redirectToInfo: MouseEventHandler<HTMLAnchorElement> = (event) => {
    // Prevent the default behavior of the <a> tag
    event.preventDefault();

    // Redirect to GitHub
    window.location.href =
      "https://www.healthline.com/health/how-to-measure-body-fat#body-circumference";

    // You can also specify a specific GitHub page:
    // window.location.href = 'https://GitHub.com/your_username';

    // If you want to open GitHub in a new tab, you can use:
    // window.open('https://GitHub.com', '_blank');
  };

  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <a href="#">
              <span className="sr-only">Jithin Sankar</span>
            </a>
            <div className="grid gap-2 py-6">
              <a
                className="flex w-full items-center py-2 text-lg font-semibold"
                href="#"
                onClick={redirectToGitHub}
              >
                About
              </a>
              <Collapsible className="grid gap-4">
                <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                  Contact
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                    <a
                      className="group grid h-auto w-full justify-start gap-1"
                      href="#"
                      onClick={redirectToTwitter}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Twitter
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        @jithins4nkar
                      </div>
                    </a>
                    <a
                      className="group grid h-auto w-full justify-start gap-1"
                      href="#"
                      onClick={redirectToLinkedIn}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        LinkedIn
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        jithinsankarnk
                      </div>
                    </a>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </SheetContent>
        </Sheet>
        <a className="mr-6 hidden lg:flex" href="#">
          <span className="sr-only">Jithin Sankar</span>
        </a>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <a
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
                onClick={redirectToGitHub}
              >
                About
              </a>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <a
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                      onClick={redirectToLinkedIn}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        LinkedIn
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        @jithinsankarnk
                      </div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                      href="#"
                      onClick={redirectToTwitter}
                    >
                      <div className="text-sm font-medium leading-none group-hover:underline">
                        Twitter
                      </div>
                      <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                        @jithins4nkar
                      </div>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <div>
            <a href="#" onClick={redirectToInfo}>
              <Info className="h-[1.2rem] w-[1.2rem]" />
            </a>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </header>
      <div className="flex justify-center my-4">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle> Body Fat% Calculator </CardTitle>
            <CardDescription>
              Calculate your body fat% using CM method
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="Gender">Gender</Label>
                <Select
                  value={selectedGender}
                  onValueChange={(v) => setSelectedGender(v as Gender)}
                >
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="male">male</SelectItem>
                    <SelectItem value="female">female</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm" htmlFor="neck">
                  neck
                </Label>
                <div className="relative">
                  <Input
                    id="neck"
                    placeholder="Enter neck"
                    type="number"
                    onChange={(e) => setNeck(parseFloat(e.target.value))}
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-sm">
                    in
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm" htmlFor="weight">
                  weight
                </Label>
                <div className="relative">
                  <Input
                    id="weight"
                    placeholder="Enter weight"
                    type="number"
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                  />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-sm">
                    kg
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label className="text-sm" htmlFor="height">
                  height
                </Label>
                <div className="flex  gap-1.5">
                  <div className="relative">
                    <Input
                      id="height"
                      placeholder="feet"
                      type="number"
                      onChange={(e) =>
                        setHeightFeet(parseFloat(e.target.value))
                      }
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-sm">
                      ft
                    </span>
                  </div>
                  <div className="relative">
                    <Input
                      id="height"
                      placeholder="inches"
                      type="number"
                      onChange={(e) =>
                        setHeightInch(parseFloat(e.target.value))
                      }
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-sm">
                      in
                    </span>
                  </div>
                </div>
              </div>

              {selectedGender == "female" ? (
                <>
                  {" "}
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-sm" htmlFor="waist">
                      waist
                    </Label>
                    <div className="relative">
                      <Input
                        id="waist"
                        placeholder="Enter waist"
                        type="number"
                        onChange={(e) => setWaist(parseFloat(e.target.value))}
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-sm">
                        in
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label className="text-sm" htmlFor="hips">
                      hips
                    </Label>
                    <div className="relative">
                      <Input
                        id="hips"
                        placeholder="Enter hips"
                        type="number"
                        onChange={(e) => setHips(parseFloat(e.target.value))}
                      />
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-sm">
                        in
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-1.5">
                  <Label className="text-sm" htmlFor="abdomen">
                    Abdomen
                  </Label>
                  <div className="relative">
                    <Input
                      id="abdomen"
                      placeholder="Enter abdomen"
                      type="number"
                      onChange={(e) => setAbdomen(parseFloat(e.target.value))}
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-sm">
                      in
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <Label className="text-sm" htmlFor="result">
                Result
              </Label>
              <div className="relative">
                <Input
                  disabled
                  id="result"
                  placeholder="Fat composition %"
                  value={bodyFatPercentage}
                  type="number"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-sm">
                  %
                </span>
              </div>
              <div className="relative">
                <Input
                  disabled
                  placeholder="Fat in kg"
                  value={bodyFat}
                  type="number"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 text-sm">
                  kg
                </span>
              </div>
            </div>

            <Button size="sm" onClick={calculateBodyFatPercentage}>
              Calculate
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default App;
