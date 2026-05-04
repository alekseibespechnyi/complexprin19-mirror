import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import EquipmentSection from "./components/EquipmentSection";
import AboutSection from "./components/AboutSection";
import RepairRequestForm from "./components/RepairRequestForm";
import Footer from "./components/Footer";
import UserAgreement from "./pages/UserAgreement";
import PrinterSelection from "./pages/PrinterSelection";
import PrinterErrorGuide from "./pages/PrinterErrorGuide";
import PrintDefectsGuide from "./pages/PrintDefectsGuide";
import TermsOfService from "./pages/TermsOfService";
import { Toaster } from "./components/ui/toaster";
import { Helmet } from "react-helmet-async";
import HpRepair from "./pages/brands/HpRepair";
import CanonRepair from "./pages/brands/CanonRepair";
import KyoceraRepair from "./pages/brands/KyoceraRepair";
import RicohRepair from "./pages/brands/RicohRepair";
import KonicaMinoltaRepair from "./pages/brands/KonicaMinoltaRepair";
import XeroxRepair from "./pages/brands/XeroxRepair";
import Pricing from "./pages/Pricing";
import Districts from "./pages/Districts";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import FAQ from "./pages/FAQ";
import CookieConsent from "./components/CookieConsent";
import Contacts from "./pages/Contacts";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";
import { 
  getOrganizationSchema, 
  getWebSiteSchema,
  getSubscriptionServiceSchema,
  getRepairServiceSchema,
  getDiagnosticServiceSchema,
  getSiteNavigationSchema,
  getWPHeaderSchema,
  getWPFooterSchema
} from "./utils/schemas";

const Home = () => {
  // Комплексная Schema.org разметка
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();
  const subscriptionServiceSchema = getSubscriptionServiceSchema();
  const repairServiceSchema = getRepairServiceSchema();
  const diagnosticServiceSchema = getDiagnosticServiceSchema();
  const siteNavigationSchema = getSiteNavigationSchema();
  const wpHeaderSchema = getWPHeaderSchema();
  const wpFooterSchema = getWPFooterSchema();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Ремонт принтеров в Москве с выездом | ComplexPrint — HP, Canon, Kyocera, Ricoh. Гарантия 6 месяцев</title>
        <meta name="description" content="Профессиональный ремонт и обслуживание лазерных принтеров и МФУ в Москве и МО. Выезд мастера в день обращения, оригинальные запчасти, договор и гарантия 6 месяцев. HP, Canon, Kyocera, Ricoh. Приём заявок 24/7." />
        <link rel="canonical" href="https://complexprint.ru/" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="ru" />
        <link rel="alternate" hrefLang="ru" href="https://complexprint.ru/" />
        
        {/* Расширенные Schema.org разметки */}
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(subscriptionServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(repairServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(diagnosticServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(siteNavigationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(wpHeaderSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(wpFooterSchema)}</script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <EquipmentSection />
        <AboutSection />
        <RepairRequestForm />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
          <Route path="/printer-selection" element={<PrinterSelection />} />
          <Route path="/printer-error-guide" element={<PrinterErrorGuide />} />
          <Route path="/print-defects-guide" element={<PrintDefectsGuide />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/remont-printerov-hp" element={<HpRepair />} />
          <Route path="/remont-printerov-canon" element={<CanonRepair />} />
          <Route path="/remont-printerov-kyocera" element={<KyoceraRepair />} />
          <Route path="/remont-printerov-ricoh" element={<RicohRepair />} />
          <Route path="/remont-printerov-konica-minolta" element={<KonicaMinoltaRepair />} />
          <Route path="/remont-printerov-xerox" element={<XeroxRepair />} />
          <Route path="/ceny" element={<Pricing />} />
          <Route path="/rayony-moskvy" element={<Districts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/reviews" element={<Reviews />} />
          {/* 404 - должен быть последним */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
      <CookieConsent />
    </div>
  );
}

export default App;
