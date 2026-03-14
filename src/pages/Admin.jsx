import React from "react";
import { motion } from "framer-motion";

import MobileSidebar from "../components/MobileSidebar";

import statCard from "../components/admin/admindashboard/statCard";
import ProjectStatus from "../components/admin/admindashboard/ProjectStatus";
import ProjectRisks from "../components/admin/admindashboard/ProjectRisks";
import ProductivityTrend from "../components/admin/admindashboard/ProductivityTrend";
import SprintSuccessRate from "../components/admin/admindashboard/SprintSuccessRate";
import ResourceUtilization from "../components/admin/admindashboard/ResourceUtilization";
import BudgetUsage from "../components/admin/admindashboard/BudgetUsage";
import IssuesAndAlerts from "../components/admin/admindashboard/IssuesAndAlerts";

import { FaFolder, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">

      {/* Sidebar */}
      <MobileSidebar />

      <div className="flex-1 overflow-x-hidden">

        <motion.div
          className="p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >

          {/* Dashboard Title */}
          <div className="flex items-center gap-6 mb-8">

            <h1 className="text-2xl font-bold dark:text-white">
              Dashboard
            </h1>

            <div className="flex bg-white dark:bg-[#1a1f26]/50 border-zinc-600 dark:border-zinc-800 rounded-lg p-1 shadow-sm">

              <button className="dark:bg-[#1e293b] text-blue-600 dark:text-blue-400 px-4 py-1 rounded-md text-xs font-bold transition">
                Dashboard
              </button>

              <button className="text-gray-400 hover:text-gray-600 dark:text-zinc-500 dark:hover:text-zinc-300 px-4 py-1 text-xs font-semibold transition">
                Projects
              </button>

              <button className="text-gray-400 hover:text-gray-600 dark:text-zinc-500 dark:hover:text-zinc-300 px-4 py-1 text-xs font-semibold transition">
                Analytics
              </button>

            </div>

          </div>

          {/* Stat Cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8"
          >

            <motion.div variants={item}>
              <StatCard
                title="TOTAL PROJECTS"
                value="42"
                icon={<FaFolder />}
                iconBg="bg-blue-50 dark:bg-cyan-950/30"
                iconColor="text-blue-500 dark:text-cyan-400"
                percent="5%"
                percentBg="bg-green-50 dark:bg-green-900/20"
                percentColor="text-green-600 dark:text-green-500"
              />
            </motion.div>

            <motion.div variants={item}>
              <StatCard
                title="ACTIVE"
                value="12"
                icon={<FaCirclePlay />}
                iconBg="bg-blue-50 dark:bg-cyan-950/30"
                iconColor="text-blue-500 dark:text-cyan-400"
                percent="0%"
                percentBg="bg-gray-100 dark:bg-zinc-800"
                percentColor="text-gray-500 dark:text-zinc-400"
              />
            </motion.div>

            <motion.div variants={item}>
              <StatCard
                title="DELAYED"
                value="3"
                icon={<FaExclamationTriangle />}
                iconBg="bg-orange-50 dark:bg-red-950/20"
                iconColor="text-orange-500 dark:text-red-500"
                percent="HIGH RISK"
                percentBg="bg-orange-100 dark:bg-transparent"
                percentColor="text-orange-600 dark:text-red-600"
              />
            </motion.div>

            <motion.div variants={item}>
              <StatCard
                title="COMPLETED"
                value="27"
                icon={<FaCheckCircle />}
                iconBg="bg-green-50 dark:bg-green-950/20"
                iconColor="text-green-600 dark:text-green-500"
                percent="5%"
                percentBg="bg-green-50 dark:bg-green-900/20"
                percentColor="text-green-600 dark:text-green-500"
              />
            </motion.div>

            <motion.div variants={item}>
              <StatCard
                title="TOTAL USERS"
                value="128"
                icon={<LuUsers />}
                iconBg="bg-purple-50 dark:bg-purple-950/20"
                iconColor="text-purple-500"
                percent="12%"
                percentBg="bg-green-50 dark:bg-green-900/20"
                percentColor="text-green-600 dark:text-green-500"
              />
            </motion.div>

          </motion.div>

          {/* Dashboard Sections */}
          <div className="grid grid-cols-1 gap-6">

            <motion.div variants={item} initial="hidden" animate="show">
              <ProjectStatus />
            </motion.div>

            <motion.div variants={item} initial="hidden" animate="show">
              <ProjectRisks />
            </motion.div>

            <motion.div variants={item} initial="hidden" animate="show">
              <ProductivityTrend />
            </motion.div>

            <motion.div variants={item} initial="hidden" animate="show">
              <SprintSuccessRate />
            </motion.div>

            <motion.div variants={item} initial="hidden" animate="show">
              <ResourceUtilization />
            </motion.div>

            <motion.div variants={item} initial="hidden" animate="show">
              <BudgetUsage />
            </motion.div>

            <motion.div variants={item} initial="hidden" animate="show">
              <IssuesAndAlerts />
            </motion.div>

          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Admin;