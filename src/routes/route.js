import React from "react";
import Home from "../components/home/home";
// import Page from "../components/common/fortesting";
// import Signup from "../components/user/signup";
import EligiblityForm from "../components/candidate/eligiblity-form";
// import EligiblityPayment from "../components/candidate/eligiblity-payment";
// import EligiblityTest from "../components/candidate/eligiblity-test";
// import Otp from "../components/user/otp";

import EligiblityFormNewFunnel from "../components/website/eligiblity-form-new-funnel";
import GradfreshNewFunnel from "../components/website/gradfresh-new-funnel";
import EligibilityOption from "../components/website/eligiblity-option";
import SkilledBasedPackage from "../components/website/skilled-based-packaged";
import SkillProgramSpage from "../components/website/skill-programs-page";
import BasketPayment from "../components/website/basket-payment";
import BasketPaymentTwo from "../components/website/basket-payment_two";
import ProgramsPage from "../components/website/programs-page";
import ProgramsPageTwo from "../components/website/programs-page-two";

import PaymentModelPage from "../components/website/payment-model-page";
import CoursePagePgpManagementDs from "../components/website/course-page-pgp-management-ds";
import CoursePagePgpManagementDsTwo from "../components/website/course-page-pgp-management-ds-two";
import PaymentModelPaapNewLanding from "../components/website/payment-model-paap-new-landing";
import PaymentModelPaapNewLandingTwo from "../components/website/payment-model-papp-new-landing-2";
import BookSlot from "../components/website/book-slot";
import AfterScholarshipTestDashboard from "../components/website/after-scholarship-test-dashboard";
import AfterScholarshipTestDashboardTwo from "../components/website/after-scholarship-test-dashboard-two";
import AfterScholarshipTestDashboardTwoUserDashboard from "../components/website/after-scholarship-test-dashboard-two-user-dashboard";
import ScholarshipTest from "../components/website/scholarship-test";
import DirectPlacementRoute from "../components/website/direct-placement-route";
import DirectPlacement from "../components/website/direct-placement";
import BothRoute from "../components/website/both-route";
import BothRouteTwo from "../components/website/both-route-two";
import AfterSecurityDeposit from "../components/website/after-security-deposit";
import LearningMethod from "../components/website/learning-method";
import OtpModalPage from "../components/website/otp-modal-page";
import DoughnutData from "../components/website/doughnutPage";
import BarGraphPage from "../components/website/barGraphPage";
import SignupModalPage from "../components/website/signup-modal-page";

import AgreementPage from "../components/website/agreementPage";
// import AgreementPage2 from "../components/website/agreementPage2";

import ReadyTestModel from "../components/website/ready-test-model";
import DisclaimerPage from "../components/website/disclaimer-page";
import DirectDoughnutData from "../components/website/DirectPlacement/directDoughnutPage";
import FailEligibility from "../components/website/FailEligibility/failEligibility";
import UploadDocs from "../components/website/upload-docs";
import DirectPlacementVerification from "../components/website/direct-placement-verification";
import DirectPlacementPayment from "../components/website/direct-placement-payment";
import DirectPlacementUploadDocs from "../components/website/direct-placement-upload-docs";
import DirectPlacementUploadDocsFresherInstant from "../components/website/direct-placement-upload-docs-fresher-instant";
import DirectPlacementUploadDocsFresherSkill from "../components/website/direct-placement-upload-docs-fresher-skill";
import DirectPlacementMeter from "../components/website/direct-placement-meter";
import ContactUs from "../components/website/contect-us";
import AboutPage from "../components/website/about-page";
import DirectPlacementDashboard from "../components/website/direct-placement-dashboard";

// import Demo from '../components/website/demo';

import ScholarshipTestResultDetail from "../components/website/scholarship-test-result-detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkilledBasedPackageTwo from "../components/website/SkilledBasedPackageTwo";
import ConsentPage from "../components/website/consent-page";

import FresherEligibilityForm from '../components/FresherEligibilityForm-Pra'
import InstantSkill from '../components/InstantSkill-Pra'
import JobGuarantee from "../components/JobGuaranteeProgram-Pra";
import FreshersPrograms from '../components/Programs-Pra'
import FresherInstantPlacement from '../components/FresherInstantPlacement-Pra'

import ExperienceEligibilityForm from '../components/ExperienceEligibilityForm-Pra'
import ExperienceInstantPlacement from '../components/ExperienceInstantPlacement-Pra'
import ExperiencePayment from '../components/ExperiencePayment'
import FresherSkillDisclaimer from '../components/FresherSkillDisclaimer'
import TermsAndConditions from "../components/TermsAndConditions-Pra";
import PrivacyPolicy from "../components/PrivacyPolicy";
import ExperienceSelectCategory from '../components/SelectCategory'
import ExperienceCheckCategory from '../components/ExperienceSelectBox-Pra'
import JobSwitchBox from '../components/ExperienceJobSwitchBox-Pra'
import FresherInstantCheckPlan from '../components/FresherInstantCheckPlan-Pra'
import FresherPlanDetails from '../components/FresherPlanDetails-Pra'
import FresherPlacementDrive from '../components/FresherPlacementDrive-Pra'
import FresherPlacementDetails from '../components/FresherPlacementDetails'
import FresherPlacementDetailsFirstStep from '../components/FresherPlacementDetails_1step'
import FresherPlacementDetailsSecondStep from '../components/FresherPlacementDetails_2step'
import FresherPlacementDetailsThirdStep from '../components/FresherPlacementDetails_3step'


const RoutePath = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route index element={<Demo />} /> */}
        <Route
          path="EligiblityFormNewFunnel"
          exact
          element={<EligiblityFormNewFunnel />}
        />
        <Route
          path="GradfreshNewFunnel"
          exact
          element={<GradfreshNewFunnel />}
        />
        <Route path="EligibilityOption" exact element={<EligibilityOption />} />
        <Route
          path="SkilledBasedPackage"
          exact
          element={<SkilledBasedPackage />}
        />
        <Route path="SkilledBasedPackageTwo" exact element={<SkilledBasedPackageTwo />} />
        <Route path="SkillProgramSpage" exact element={<SkillProgramSpage />} />
        <Route path="EligiblityForm" exact element={<EligiblityForm />} />
        <Route path="BasketPayment/:id" exact element={<BasketPayment />} />
   
        <Route path="BasketPaymentTwo" exact element={<BasketPaymentTwo />} />
        <Route path="ProgramsPage" exact element={<ProgramsPage />} />
        <Route path="ProgramsPageTwo" exact element={<ProgramsPageTwo />} />

        <Route path="PaymentModelPage/:id" exact element={<PaymentModelPage />} />

        <Route path="PaymentModelPage" exact element={<PaymentModelPage />} />
        <Route path="PaymentModelPage/:id" exact element={<PaymentModelPage />} />
        <Route path="CoursePagePgpManagementDs/:id" exact element={<CoursePagePgpManagementDs />} />
        <Route path="CoursePagePgpManagementDsTwo/:id" exact element={<CoursePagePgpManagementDsTwo />} />
        <Route path="PaymentModelPaapNewLanding" exact element={<PaymentModelPaapNewLanding />} />
        <Route path="PaymentModelPaapNewLandingTwo" exact element={<PaymentModelPaapNewLandingTwo />} />
        <Route path="PaymentModelPaapNewLandingTwo/:id" exact element={<PaymentModelPaapNewLandingTwo />} />
        <Route path="BookSlot" exact element={<BookSlot />} />
        <Route path="AfterScholarshipTestDashboard" exact element={<AfterScholarshipTestDashboard />} />
        <Route path="AfterScholarshipTestDashboardTwo" exact element={<AfterScholarshipTestDashboardTwo />} />
        <Route path="user-dashboard" exact element={<AfterScholarshipTestDashboardTwoUserDashboard />} />
        <Route path="ScholarshipTest" exact element={<ScholarshipTest />} />
        <Route path="DirectPlacementRoute" exact element={<DirectPlacementRoute />} />
        <Route path="DirectPlacement" exact element={<DirectPlacement />} />
        <Route path="BothRoute" exact element={<BothRoute />} />
        <Route path="BothRouteTwo" exact element={<BothRouteTwo />} />
        <Route path="AfterSecurityDeposit" exact element={<AfterSecurityDeposit />} />
        <Route path="LearningMethod" exact element={<LearningMethod />} />
        <Route path="OtpModalPage" exact element={<OtpModalPage />} />
        <Route path="doughnut" exact element={<DoughnutData />} />
        <Route path="barGraphPage" exact element={<BarGraphPage />} />
        <Route path="SignupModalPage" exact element={<SignupModalPage />} />
        <Route path="AgreementPage/:id" exact element={<AgreementPage />} />
        <Route path="ReadyTestModel" exact element={<ReadyTestModel />} />
        <Route path="DisclaimerPage" exact element={<DisclaimerPage />} />
        <Route path="DirectDoughnutData" exact element={<DirectDoughnutData />} />
        <Route path="FailEligibility" exact element={<FailEligibility />} />
        <Route path="UploadDocs" exact element={<UploadDocs />} />
        <Route path="ScholarshipTestResultDetail" exact element={<ScholarshipTestResultDetail />} />
        <Route path="DirectPlacementPayment" exact element={<DirectPlacementPayment />} />
       
        <Route path="DirectPlacementVerification" exact element={<DirectPlacementVerification />} />
        <Route path="DirectPlacementUploadDocs" exact element={<DirectPlacementUploadDocs />} />
        <Route path="DirectPlacementUploadDocsFresherInstant" exact element={<DirectPlacementUploadDocsFresherInstant />} />
        
        <Route path="DirectPlacementUploadDocsFresherSkill" exact element={<DirectPlacementUploadDocsFresherSkill />} />
        
        <Route path="DirectPlacementMeter" exact element={<DirectPlacementMeter />} />
        <Route path="ContactUs" exact element={<ContactUs />} />
        <Route path="AboutPage" exact element={<AboutPage />} />
        <Route path="DirectPlacementDashboard" exact element={<DirectPlacementDashboard />} />
        <Route path="ConsentPage" exact element={<ConsentPage />} />
       

       {/* new route */}

       <Route path="fresher-eligibility" exact element={<FresherEligibilityForm />} />
       <Route path="fresher-eligibility-instant-skill" exact element={<InstantSkill />} />
       <Route path="fresher-eligibility-job-guarantee" exact element={<JobGuarantee />} />
       <Route path="fresher-eligibility-programs" exact element={<FreshersPrograms />} />
       <Route path="fresher-instant-placement" exact element={<FresherInstantPlacement />} />
       <Route path="fresher-skill-disclaimer" exact element={<FresherSkillDisclaimer />} />
       <Route path="fresher-instant-check-plan" exact element={<FresherInstantCheckPlan />} />
       <Route path="fresher-plan-details" exact element={<FresherPlanDetails />} />
       <Route path="fresher-placement-drive" exact element={<FresherPlacementDrive />} />
       <Route path="fresher-placement-details" exact element={<FresherPlacementDetails />} />
       <Route path="fresher-placement-details-first-step" exact element={<FresherPlacementDetailsFirstStep />} />
       <Route path="fresher-placement-details-second-step" exact element={<FresherPlacementDetailsSecondStep />} />
       <Route path="fresher-placement-details-third-step" exact element={<FresherPlacementDetailsThirdStep />} />

       
       
       <Route path="fresher-select-category" exact element={<ExperienceSelectCategory />} />
       <Route path="fresher-check-category" exact element={<ExperienceCheckCategory />} />
       



       <Route path="experience-eligibility" exact element={<ExperienceEligibilityForm />} />
       <Route path="experience-eligibility-instant-skill" exact element={<ExperienceInstantPlacement />} />
       <Route path="experience-eligibility-payment" exact element={<ExperiencePayment />} />
       <Route path="experience-select-category" exact element={<ExperienceSelectCategory />} />
       <Route path="experience-check-category" exact element={<ExperienceCheckCategory />} />
       <Route path="experience-job-switch" exact element={<JobSwitchBox />} />

              <Route path="terms-of-use" exact element={<TermsAndConditions />} />
              <Route path="privacy-policy" exact element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePath;
