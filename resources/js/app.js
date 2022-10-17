import '../assets/css/font.css'
import '../assets/css/glyphicons.css'
import '../assets/css/vue-flash-message.css'
import 'bootstrap';
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Dashboard from './components/Dashboard.vue'
import Contact from './components/Contact.vue'
import PricingGuide from './components/PricingGuide.vue'
import App from './components/App.vue'
import MonthlySpecialsLibrary from './components/MonthlySpecialsLibrary.vue'
import MonthlySubmissionForm from './components/MonthlySubmissionForm.vue'
import AnnualCatalogueForm from './components/AnnualCatalogueForm.vue'
import TradeShowForm from './components/TradeShowForm.vue'
import ScanBackForm from './components/ScanBackForm.vue'
import NewProductRequestForm from './components/NewProductRequestForm.vue'
import MySubmissions from './components/MySubmissions.vue'
import Drafts from './components/Drafts.vue'
import MyProducts from './components/MyProducts.vue'
import TradeshowCustomers from './components/TradeshowCustomers.vue'
import TradeshowComments from './components/TradeshowComments.vue'
import MyProfile from './components/MyProfile.vue'
import EditProductRequestForm from './components/EditProductRequestForm.vue'
import ProductPresentation from './components/ProductPresentation.vue'


import AdminDashboard from './admin_components/Dashboard.vue'
import AdminPriceGuide from './admin_components/PriceGuide.vue'
import SentNotification from './admin_components/SentNotification.vue'
import SubmissionList from './admin_components/SubmissionList.vue'
import VendorNewRequest from './admin_components/VendorNewRequest.vue'
import ProductEditRequest from './admin_components/ProductEditRequest.vue'
import NewProductRequest from './admin_components/NewProductRequest.vue'
import ScanBackSubmissionDeclined from './admin_components/ScanBackSubmissionDeclined.vue'
import ScanBackSubmissionApproved from './admin_components/ScanBackSubmissionApproved.vue'
import ProductSubmissionList from './admin_components/ProductSubmissionList.vue'
import SpaceSubmissionList from './admin_components/SpaceSubmissionList.vue'
import CustomerRegistrationList from './admin_components/CustomerRegistrationList.vue'
import CustomerAttendees from './admin_components/CustomerAttendees.vue'
import VendorSubmissionList from './admin_components/VendorSubmissionList.vue'
import UnverifiedCustomers from './admin_components/UnverifiedCustomers.vue'
import AnnualCatalogueSubmissionList from './admin_components/AnnualCatalogueSubmissionList.vue'
import ScanBackSubmissionList from './admin_components/ScanBackSubmissionList.vue'
import TradeshowsEvents from './admin_components/TradeshowsEvents.vue'
import ProductSubmissionSendNotification from './admin_components/ProductSubmissionSendNotification.vue'
import TradeShowsSendNotification from './admin_components/TradeShowsSendNotification.vue'
import VendorList from './admin_components/VendorList.vue'
import TradeshowsEvent from './admin_components/TradeshowsEventAuckland.vue'
import TradeshowsCreate from './admin_components/TradeshowsCreate.vue'
import TradeshowsAddVendor from './admin_components/TradeshowsAddVendor.vue'
import TradeshowsEditVendor from './admin_components/TradeshowsEditVendor.vue'
import TradeshowsEditCustomer from './admin_components/TradeshowsEditCustomer.vue'
import TradeshowsAddCustomer from './admin_components/TradeshowsAddCustomer.vue'
import TradeshowsVerifyCustomer from './admin_components/TradeshowsVerifyCustomer.vue'
import AnnualCatalogueSubEdit from './admin_components/AnnualCatalogueSubEdit.vue'
import ScanBackSubmissionEdit from './admin_components/ScanBackSubmissionEdit.vue'
import AddVendor from './admin_components/AddVendor.vue'
import EditVendor from './admin_components/EditVendor.vue'
import NewRequest from './admin_components/NewRequest.vue'
import MyProductNewRequest from './admin_components/MyProductNewRequest.vue'
import MyProductEditRequest from './admin_components/MyProductEditRequest.vue'
import MonthlySpecialsEcopy from './admin_components/MonthlySpecialsEcopy.vue'
import ProductSubmission from './admin_components/ProductSubmission.vue'
import AddUser from './admin_components/AddUser.vue'
import UserList from './admin_components/UserList.vue'
import PermissionList from './admin_components/PermissionList.vue'
import AnnualCatalogueEcopy from './admin_components/AnnualCatalogueEcopy.vue'
import ProductPresentationRequest from './admin_components/ProductPresentationRequest.vue'
import ProductPresentationRequestEdit from './admin_components/ProductPresentationRequestEdit.vue'
import AddSpace from './admin_components/AddSpace.vue'



Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/contact-us',
            name: 'Contact us',
            component: Contact
        },
        {
            path: '/pricing-guide',
            name: 'Pricing Guide',
            component: PricingGuide
        },
        {
            path: '/monthly-specials-library',
            name: 'Monthly Specials Library',
            component: MonthlySpecialsLibrary
        },
        {
            path: '/monthly-submission-form',
            name: 'Monthly Submission Form',
            component: MonthlySubmissionForm
        },
        {
            path: '/annual-catalogue-form',
            name: 'Annual Catalogue Form',
            component: AnnualCatalogueForm
        },
        {
            path: '/trade-show-form',
            name: 'Trade Show Form',
            component: TradeShowForm
        },
        {
            path: '/scan-back-form',
            name: 'Scan Back Form',
            component: ScanBackForm
        },
        {
            path: '/new-product-request-form',
            name: 'New Product Request Form',
            component: NewProductRequestForm
        },
        {
            path: '/my-submissions',
            name: 'My Submissions',
            component: MySubmissions
        },
        {
            path: '/drafts',
            name: 'Drafts',
            component: Drafts
        },
        {
            path: '/my-products',
            name: 'My Products',
            component: MyProducts
        },
        {
            path: '/tradeshow-customers',
            name: 'Tradeshow Customers',
            component: TradeshowCustomers
        },
        {
            path: '/tradeshow-comments',
            name: 'Tradeshow Comments',
            component: TradeshowComments
        },
        {
            path: '/my-profile',
            name: 'My Profile',
            component: MyProfile
        },
        {
            path: '/edit-product-request-form',
            name: 'Edit Product Request Form',
            component: EditProductRequestForm
        },
        {
            path: '/add-product-presentation',
            name: 'Product Presentation',
            component: ProductPresentation
        },


        /* Admin Panel */
        {
            path: '/adm-dashboard',
            name: 'Admin Dashboard',
            component: AdminDashboard
        },
        {
            path: '/adm-product-sub-list',
            name: 'Product Submission List',
            component: ProductSubmissionList
        },
        {
            path: '/adm-space-sub-list',
            name: 'Space Submission List',
            component: SpaceSubmissionList
        },
        {
            path: '/adm-product-submission',
            name: 'Product Submission',
            component: ProductSubmission
        },
        {
            path: '/product-sub/adm-send-notification',
            name: 'Product Submission Send Notification',
            component: ProductSubmissionSendNotification
        },
        {
            path: '/adm-monthly-specials-ecopy',
            name: 'Monthly Specials E-copy',
            component: MonthlySpecialsEcopy
        },
        {
            path: '/tradeshows/adm-events',
            name: 'Tradeshows Events',
            component: TradeshowsEvents
        },
        {
            path: '/tradeshows/adm-event',
            name: 'Tradeshows Event',
            component: TradeshowsEvent
        },
        {
            path: '/tradeshows/adm-create',
            name: 'Tradeshows Create',
            component: TradeshowsCreate
        },
        {
            path: '/tradeshows/adm-add-vendor',
            name: 'Tradeshows Add Vendor',
            component: TradeshowsAddVendor
        },
        {
            path: '/tradeshows/adm-vendor-sub-list',
            name: 'Vendor Submission List',
            component: VendorSubmissionList
        },
        {
            path: '/tradeshows/adm-edit-vendor',
            name: 'Tradeshows Edit Vendor',
            component: TradeshowsEditVendor
        },
        {
            path: '/tradeshows/adm-customer-reg-list',
            name: 'Customer Registration List',
            component: CustomerRegistrationList
        },
        {
            path: '/tradeshows/adm-customer-attendees',
            name: 'Customer Attendees',
            component: CustomerAttendees
        },
        {
            path: '/tradeshows/adm-edit-customer',
            name: 'Tradeshows Edit Customer',
            component: TradeshowsEditCustomer
        },
        {
            path: '/tradeshows/adm-send-notification',
            name: 'Trade Shows Send Notification',
            component: TradeShowsSendNotification
        },
        {
            path: '/tradeshows/adm-add-customer',
            name: 'Tradeshows Add Customer',
            component: TradeshowsAddCustomer
        },
        {
            path: '/tradeshows/adm-unverified-customers',
            name: 'Unverified Customers',
            component: UnverifiedCustomers
        },
        {
            path: '/tradeshows/adm-verify-customer',
            name: 'Tradeshows Verify Customer',
            component: TradeshowsVerifyCustomer
        },
        {
            path: '/annual-catalogue/adm-submission-list',
            name: 'Annual Catalogue Submission List',
            component: AnnualCatalogueSubmissionList
        },
        {
            path: '/annual-catalogue-sub/adm-edit',
            name: 'Annual Catalogue Submission Edit',
            component: AnnualCatalogueSubEdit
        },{
            path: '/adm-annual-catalogue-ecopy',
            name: 'Annual Catalogue E-copy',
            component: AnnualCatalogueEcopy
        },
        {
            path: '/scan-back/adm-submission-list',
            name: 'Scan Back Submission List',
            component: ScanBackSubmissionList
        },
        {
            path: '/scan-back/adm-submission-edit',
            name: 'Scan Back Submission Edit',
            component: ScanBackSubmissionEdit
        },
        {
            path: '/adm-sb-submission-declined',
            name: 'Scan Back Submission Declined',
            component: ScanBackSubmissionDeclined
        },
        {
            path: '/adm-sb-submission-approved',
            name: 'Scan Back Submission Approved',
            component: ScanBackSubmissionApproved
        },
        {
            path: '/adm-new-product-request',
            name: 'New Product Request',
            component: NewProductRequest
        },
        {
            path: '/adm-new-myproduct-request',
            name: 'My Product New Request',
            component: MyProductNewRequest
        },
        {
            path: '/adm-product-edit-request',
            name: 'Product Edit Request',
            component: ProductEditRequest
        },
        {
            path: '/adm-edit-myproduct-request',
            name: 'My Product Edit Request',
            component: MyProductEditRequest
        },
        {
            path: '/adm-vendor-list',
            name: 'Vendor List',
            component: VendorList
        },
        {
            path: '/vendor/adm-add-vendor',
            name: 'Add Vendor',
            component: AddVendor
        },
        {
            path: '/vendor/adm-edit-vendor',
            name: 'Edit Vendor',
            component: EditVendor
        },
        {
            path: '/vendor/adm-new-request',
            name: 'New Request',
            component: NewRequest
        },
        {
            path: '/vendor/adm-vendor-request-list',
            name: 'Vendor New Request',
            component: VendorNewRequest
        },
        {
            path: '/adm-submission-list',
            name: 'Submission List',
            component: SubmissionList
        },
        {
            path: '/adm-sent-notification',
            name: 'Sent Notification',
            component: SentNotification
        },
        {
            path: '/adm-priceguide',
            name: 'Admin Price Guide',
            component: AdminPriceGuide
        },
        {
            path: '/adm-adduser',
            name: 'Add User',
            component: AddUser
        },
        {
            path: '/adm-userlist',
            name: 'User List',
            component: UserList
        },
        {
            path: '/adm-permissionlist',
            name: 'Permission List',
            component: PermissionList
        },
        {
            path: '/adm-product-presentation-request',
            name: 'Product Presentation Request',
            component: ProductPresentationRequest
        },
        {
            path: '/adm-product-presentation-edit',
            name: 'Product Presentation Request Edit',
            component: ProductPresentationRequestEdit
        },
        {
            path: '/adm-add-space',
            name: 'Add a Space',
            component: AddSpace
        },

        /* Admin Panel */




    ],
});
const app = new Vue({
    el: '#app',
    components: {App},
    router
});

