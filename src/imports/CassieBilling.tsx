import svgPaths from "./svg-4wmp9g4ycw";
import imgAb6AXuBmBgLeNNabbTxpeHUuvs7V03KPfk8JifJkp4O1AdiAJzvqxkf3TKJqpFmG0JQyUlY4THPdMoHiLjE67SHoA58HKtdCg821Jdzc0PqWWv0En71CUobH7ZxpUxrPcwNQKlf1Cv7EQcRqvLtsdNF6UWFdG9U7PqyP7FY9VtUwpNa5PLg26WQNamcvKT9HYmWjIc0BmjebCx3NGh1EdZWynhg0KdZtnLxQwa3H7L9W0Arlp3STuabkFewb3DaqcMyI4Mzq4C from "figma:asset/dc120780be6e151ebb9c1c0d894e801ff9e63b8d.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Lora:Bold',sans-serif] font-bold h-[48px] justify-center leading-[0] relative shrink-0 text-[#111] text-[48px] tracking-[-1.2px] w-[318px]">
        <p className="leading-[48px]">Billing</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Light',sans-serif] font-light h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#666] text-[18px] w-[441.63px]">
        <p className="mb-0">Comprehensive financial overview and legal practice</p>
        <p>invoicing.</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[441.63px]" data-name="Container">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#111] content-stretch flex flex-col items-center justify-center pb-[13.5px] pt-[12.5px] px-[32px] relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] uppercase w-[98.36px]">
        <p className="leading-[20px]">New Invoice</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[33px] py-[13px] relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[14px] text-center tracking-[0.35px] uppercase w-[138.44px]">
        <p className="leading-[20px]">Generate Report</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header Section">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] right-[41px] top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[2.4px] uppercase w-[113.83px]">
        <p className="leading-[16px]">Outstanding</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] right-[-41px] top-[72px]" data-name="Container">
      <div className="flex flex-col font-['Lora:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] relative shrink-0 text-[#111] text-[36px] w-[300px]">
        <p className="leading-[40px]">$42,850.00</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="var(--fill-0, #71717A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[137.11px]">
        <p className="leading-[16px]">+12.4% from last month</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[40px] right-[41px] top-[120px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="col-1 h-[180px] justify-self-stretch relative row-1 shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container4 />
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] right-[41px] top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[2.4px] uppercase w-[110.7px]">
        <p className="leading-[16px]">Total Billed</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] right-[41px] top-[72px]" data-name="Container">
      <div className="flex flex-col font-['Lora:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] relative shrink-0 text-[#111] text-[36px] w-[225px]">
        <p className="leading-[40px]">$128,400.00</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="var(--fill-0, #71717A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[128.08px]">
        <p className="leading-[16px]">+8.1% from last month</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[40px] right-[41px] top-[120px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="col-2 h-[180px] justify-self-stretch relative row-1 shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container9 />
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] right-[40px] top-[40px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[2.4px] uppercase w-[167.33px]">
        <p className="leading-[16px]">Payments Received</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] right-[-43px] top-[72px]" data-name="Container">
      <div className="flex flex-col font-['Lora:Regular',sans-serif] font-normal h-[40px] justify-center leading-[0] relative shrink-0 text-[#111] text-[36px] w-[270px]">
        <p className="leading-[40px]">$85,550.00</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[7px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 7">
        <g id="Container">
          <path d={svgPaths.pde19380} fill="var(--fill-0, #71717A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-[131.19px]">
        <p className="leading-[16px]">+5.2% from last month</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[40px] right-[40px] top-[120px]" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container14() {
  return (
    <div className="col-3 h-[180px] justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container15 />
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function StatsGrid() {
  return (
    <div className="bg-white grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_180px] p-px relative shrink-0 w-full" data-name="Stats Grid">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none" />
      <VerticalBorder />
      <VerticalBorder1 />
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Lora:Regular',sans-serif] font-normal h-[32px] justify-center leading-[0] relative shrink-0 text-[#111] text-[24px] w-[213px]">
          <p className="leading-[32px]">Recent Invoices</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[14px] text-center w-[113.13px]">
          <p className="leading-[20px]">View All Invoices</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="content-stretch flex items-center justify-between pb-[17px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#111] border-b border-solid inset-0 pointer-events-none" />
      <Heading2 />
      <Button2 />
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[279.25px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[20px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[1.2px] uppercase w-[76.38px]">
          <p className="leading-[16px]">Invoice ID</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[362.95px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[20px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[1.2px] uppercase w-[50.45px]">
          <p className="leading-[16px]">Client</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[204.2px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[20px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[1.2px] uppercase w-[81.13px]">
          <p className="leading-[16px]">Issue Date</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[200.02px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[20px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[1.2px] uppercase w-[62.09px]">
          <p className="leading-[16px]">Amount</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[185.58px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-px py-[20px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] text-right tracking-[1.2px] uppercase w-[54.05px]">
          <p className="leading-[16px]">Status</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden="true" className="absolute border-[#e4e4e7] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-col items-start px-px py-[36.5px] relative shrink-0 w-[279.25px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[16px] w-[119.09px]">
        <p className="leading-[normal]">#INV-2024-001</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px]">{`Anderson & Co.`}</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] w-full">
        <p className="leading-[16px]">Corporate Litigation</p>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-start px-px py-[24.5px] relative shrink-0 w-[362.95px]" data-name="Data">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[37px] pt-[36px] px-px relative shrink-0 w-[204.2px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[84.17px]">
        <p className="leading-[20px]">Oct 12, 2024</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-start px-px py-[36.5px] relative shrink-0 w-[200.02px]" data-name="Data">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[87.5px]">
        <p className="leading-[normal]">$12,400.00</p>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-end px-[13px] py-[5px] relative shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-right tracking-[1px] uppercase w-[30.92px]">
        <p className="leading-[normal]">Sent</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-end px-px py-[35.5px] relative shrink-0 w-[185.58px]" data-name="Data">
      <BackgroundBorder />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] relative shrink-0 w-full" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[279.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[36.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[16px] w-[122.31px]">
          <p className="leading-[normal]">#INV-2024-002</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px]">Elena Rodriguez</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] w-full">
        <p className="leading-[16px]">Real Estate Closing</p>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[362.95px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[24.5px] relative w-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[204.2px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[37px] pt-[36px] px-px relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[84.11px]">
          <p className="leading-[20px]">Oct 10, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[200.02px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[36.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[79.38px]">
          <p className="leading-[normal]">$3,250.00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#111] content-stretch flex items-center justify-end px-[13px] py-[5px] relative shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-right text-white tracking-[1px] uppercase w-[27.16px]">
        <p className="leading-[normal]">Paid</p>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[185.58px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-px py-[35.5px] relative w-full">
        <BackgroundBorder1 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <Data5 />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[279.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[36.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[16px] w-[122.48px]">
          <p className="leading-[normal]">#INV-2024-003</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px]">Global Tech Solutions</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] w-full">
        <p className="leading-[16px]">IP Consultation</p>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[362.95px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[24.5px] relative w-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[204.2px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[37px] pt-[36px] px-px relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[89.25px]">
          <p className="leading-[20px]">Sep 28, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[200.02px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[36.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[80.17px]">
          <p className="leading-[normal]">$8,900.00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-center justify-end px-[13px] py-[5px] relative shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#fee2e2] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[10px] text-right tracking-[1px] uppercase w-[55.03px]">
        <p className="leading-[normal]">Overdue</p>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[185.58px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-px py-[35.5px] relative w-full">
        <BackgroundBorder2 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[279.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[36.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[16px] w-[122.95px]">
          <p className="leading-[normal]">#INV-2024-004</p>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px]">Stellar Media Group</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] w-full">
        <p className="leading-[16px]">Contract Negotiation</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[362.95px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[24.5px] relative w-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[204.2px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[37px] pt-[36px] px-px relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[88.83px]">
          <p className="leading-[20px]">Sep 25, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[200.02px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[36.5px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[86.3px]">
          <p className="leading-[normal]">$15,000.00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#111] content-stretch flex items-center justify-end px-[13px] py-[5px] relative shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#111] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-right text-white tracking-[1px] uppercase w-[27.16px]">
        <p className="leading-[normal]">Paid</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[185.58px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-px py-[35.5px] relative w-full">
        <BackgroundBorder3 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <Data15 />
      <Data16 />
      <Data17 />
      <Data18 />
      <Data19 />
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[279.25px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36px] pt-[36.5px] px-px relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[16px] w-[122.11px]">
          <p className="leading-[normal]">#INV-2024-005</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
        <p className="leading-[28px]">North Star Logistics</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] w-full">
        <p className="leading-[16px]">Advisory Services</p>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[362.95px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-px py-[24px] relative w-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[204.2px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36.5px] pt-[36px] px-px relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[89.38px]">
          <p className="leading-[20px]">Sep 20, 2024</p>
        </div>
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[200.02px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[36px] pt-[36.5px] px-px relative w-full">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[16px] w-[75.61px]">
          <p className="leading-[normal]">$2,100.00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#f4f4f5] content-stretch flex items-center justify-end px-[13px] py-[5px] relative shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e4e7] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[10px] text-right tracking-[1px] uppercase w-[30.92px]">
        <p className="leading-[normal]">Sent</p>
      </div>
    </div>
  );
}

function Data24() {
  return (
    <div className="relative shrink-0 w-[185.58px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[35px] pt-[35.5px] px-px relative w-full">
        <BackgroundBorder4 />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#f4f4f5] border-solid border-t inset-0 pointer-events-none" />
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
      <Data24 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] pb-px relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-px relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <Body />
    </div>
  );
}

function TableSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[16px] relative shrink-0 w-full" data-name="Table Section">
      <HorizontalBorder />
      <Table />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-0 max-w-[1280px] px-[24px] py-[48px] right-0 top-[81px]" data-name="Main">
      <HeaderSection />
      <StatsGrid />
      <TableSection />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Liberation_Serif:Regular',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[20px] w-[52.22px]">
        <p className="leading-[28px]">Cassie</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[1.2px] uppercase w-[431.52px]">
        <p className="leading-[16px]">© 2024 Cassie Law ERP. Premium Financial Management.</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[1.2px] uppercase w-[35.47px]">
        <p className="leading-[16px]">Help</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[1.2px] uppercase w-[47.56px]">
        <p className="leading-[16px]">Terms</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[12px] tracking-[1.2px] uppercase w-[60.02px]">
        <p className="leading-[16px]">Privacy</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[24px] h-[16px] items-start relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container30() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative w-full">
          <Container31 />
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.5)] bottom-0 content-stretch flex flex-col items-start left-0 pb-[48px] pt-[49px] right-0" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <Container30 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="flex flex-col font-['Liberation_Serif:Regular',sans-serif] h-[36px] justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[30px] tracking-[-0.75px] w-[73.83px]">
        <p className="leading-[36px]">Cassie</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[73.02px]">
        <p className="leading-[20px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[46.16px]">
        <p className="leading-[20px]">Clients</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[41.53px]">
        <p className="leading-[20px]">Cases</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[95.25px]">
        <p className="leading-[20px]">Time Tracking</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[5px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#111] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#111] text-[14px] w-[40.41px]">
        <p className="leading-[20px]">Billing</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[76.33px]">
        <p className="leading-[20px]">Documents</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#666] text-[14px] w-[60.42px]">
        <p className="leading-[20px]">Calendar</p>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Nav">
      <Link3 />
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Container">
      <Heading />
      <Nav />
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #111111)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #111111)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Container38 />
    </div>
  );
}

function Ab6AXuBmBgLeNNabbTxpeHUuvs7V03KPfk8JifJkp4O1AdiAJzvqxkf3TKJqpFmG0JQyUlY4THPdMoHiLjE67SHoA58HKtdCg821Jdzc0PqWWv0En71CUobH7ZxpUxrPcwNQKlf1Cv7EQcRqvLtsdNF6UWFdG9U7PqyP7FY9VtUwpNa5PLg26WQNamcvKT9HYmWjIc0BmjebCx3NGh1EdZWynhg0KdZtnLxQwa3H7L9W0Arlp3STuabkFewb3DaqcMyI4Mzq4C() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="AB6AXuBmBGLe_nNabbTxpeHUuvs7v03kPFK8jif-jkp4O1adiAJzvqxkf3tKJqpFmG0jQyUlY4T-hPdMOHiLjE67SHoA58hKTDCg821jdzc0PqWWv0EN71CUobH7ZxpUXRPcw-nQKlf1Cv7EQcRQVLtsdN_f6uW-FdG9U7PQY-P7fY9VtUwpNa_5pLg26wQNamcvK_T9HYmWjIC0bmjebCX3nGH1edZWynhg0KdZtnLXQwa3H7L9w0arlp3sTuabkFewb3DaqcMyI4Mzq4c">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuBmBgLeNNabbTxpeHUuvs7V03KPfk8JifJkp4O1AdiAJzvqxkf3TKJqpFmG0JQyUlY4THPdMoHiLjE67SHoA58HKtdCg821Jdzc0PqWWv0En71CUobH7ZxpUxrPcwNQKlf1Cv7EQcRqvLtsdNF6UWFdG9U7PqyP7FY9VtUwpNa5PLg26WQNamcvKT9HYmWjIc0BmjebCx3NGh1EdZWynhg0KdZtnLxQwa3H7L9W0Arlp3STuabkFewb3DaqcMyI4Mzq4C} />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#ebe8df] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Background+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Ab6AXuBmBgLeNNabbTxpeHUuvs7V03KPfk8JifJkp4O1AdiAJzvqxkf3TKJqpFmG0JQyUlY4THPdMoHiLjE67SHoA58HKtdCg821Jdzc0PqWWv0En71CUobH7ZxpUxrPcwNQKlf1Cv7EQcRqvLtsdNF6UWFdG9U7PqyP7FY9VtUwpNa5PLg26WQNamcvKT9HYmWjIc0BmjebCx3NGh1EdZWynhg0KdZtnLxQwa3H7L9W0Arlp3STuabkFewb3DaqcMyI4Mzq4C />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Button3 />
      <Button4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[80px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative size-full">
          <Container35 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function HeaderNavigation() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(249,248,243,0.8)] content-stretch flex flex-col items-start left-0 pb-px right-0 top-0" data-name="Header - Navigation">
      <div aria-hidden="true" className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <Container34 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[1342px] min-h-[1342px] relative shrink-0 w-full" data-name="Container">
      <Main />
      <Footer />
      <HeaderNavigation />
    </div>
  );
}

export default function CassieBilling() {
  return (
    <div className="bg-[#f9f8f3] content-stretch flex flex-col items-start relative size-full" data-name="Cassie - Billing">
      <Container />
    </div>
  );
}