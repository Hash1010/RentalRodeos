namespace Terrasoft.Core.Process
{

	using Newtonsoft.Json;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Configuration;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrOppVerificationStageMethodsWrapper

	/// <exclude/>
	public class UsrOppVerificationStageMethodsWrapper : ProcessModel
	{

		public UsrOppVerificationStageMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var currentContact = UserConnection.CurrentUser.ContactId;
			 
			 string senderName = "ErrorMessageSender";
									 string message = JsonConvert.SerializeObject(new {
									 MessageText = "Kindly fill in the required fields",
									 Contact=currentContact
									 
									 });
									 MsgChannelUtilities.PostMessage(UserConnection,senderName,message);
			return true;
		}

		#endregion

	}

	#endregion

}

