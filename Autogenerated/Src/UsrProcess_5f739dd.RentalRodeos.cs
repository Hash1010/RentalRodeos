namespace Terrasoft.Core.Process
{

	using global::Common.Logging;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrProcess_5f739ddMethodsWrapper

	/// <exclude/>
	public class UsrProcess_5f739ddMethodsWrapper : ProcessModel
	{

		public UsrProcess_5f739ddMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			ILog logger = LogManager.GetLogger("PaymentGeneration");
			
			var startDate = Get<DateTime>("StartDate");
			var endDate = Get<DateTime>("EndDate");
			
			int months = ((endDate.Year - startDate.Year )*12) + (endDate.Month - startDate.Month) + 1;
			logger.Info($"months = {months}");
			
			Set<int>("NoOfMonths",months);
			
			var totalAmount = Get<decimal>("TotalAmount");
			
			decimal monthlyAmount = months > 0 ? decimal.Round(totalAmount / months, 2) : 0;
			
			Set<decimal>("MonthlyAmount",monthlyAmount);
			
			return true;
		}

		#endregion

	}

	#endregion

}

