"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[553],{57784:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],r={sidebar_position:2},s="Installation",c={unversionedId:"Installation",id:"Installation",isDocsHomePage:!1,title:"Installation",description:"Method 1 - RepoToRoblox",source:"@site/docs/Installation.md",sourceDirName:".",slug:"/Installation",permalink:"/Janitor/docs/Installation",editUrl:"https://github.com/howmanysmall/Janitor/edit/main/docs/Installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Getting Started with Janitor",permalink:"/Janitor/docs/intro"},next:{title:"Why use Janitor?",permalink:"/Janitor/docs/WhyUseJanitor"}},d=[{value:"Method #1 - RepoToRoblox",id:"method-1---repotoroblox",children:[]},{value:"Method #2 - HttpService",id:"method-2---httpservice",children:[]},{value:"Method 3 - Manual",id:"method-3---manual",children:[]},{value:"Method 4 - Wally",id:"method-4---wally",children:[]},{value:"Next",id:"next",children:[]}],p={toc:d};function u(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"method-1---repotoroblox"},"Method #1 - RepoToRoblox"),(0,a.kt)("p",null,"Using Boatbomber's ",(0,a.kt)("a",{parentName:"p",href:"https://devforum.roblox.com/t/repotoroblox-simple-and-quick-github-cloning-into-your-explorer/1000272"},"RepoToRoblox")," plugin is the easiest way to install in Studio."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the RepoToRoblox widget, enter ",(0,a.kt)("inlineCode",{parentName:"li"},"howmanysmall")," as the Owner and ",(0,a.kt)("inlineCode",{parentName:"li"},"Janitor")," as the Repo."),(0,a.kt)("li",{parentName:"ol"},"Click the Clone Repo button.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/mOYl9T1.png",alt:"Widget"})),(0,a.kt)("h3",{id:"method-2---httpservice"},"Method #2 - HttpService"),(0,a.kt)("p",null,"This method uses ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpService")," to install Janitor."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In Roblox Studio, paste the following command into your command bar."),(0,a.kt)("li",{parentName:"ol"},"Run the following command:")),(0,a.kt)("textarea",{readonly:!0,rows:"5",onClick:function(t){return t.target.select()},style:{width:"100%"}},'local ReplicatedStorage = game:GetService("ReplicatedStorage")\nlocal HttpService = game:GetService("HttpService")\nlocal HttpEnabled = HttpService.HttpEnabled\nHttpService.HttpEnabled = true\nlocal function RequestAsync(RequestDictionary)\n\treturn HttpService:RequestAsync(RequestDictionary)\nend\nlocal function GetAsync(Url, Headers)\n\tHeaders["cache-control"] = "no-cache"\n\tlocal Success, ResponseDictionary = pcall(RequestAsync, {\n\t\tHeaders = Headers;\n\t\tMethod = "GET";\n\t\tUrl = Url;\n\t})\n\tif Success then\n\t\tif ResponseDictionary.Success then\n\t\t\treturn ResponseDictionary.Body\n\t\telse\n\t\t\treturn false, string.format("HTTP %d: %s", ResponseDictionary.StatusCode, ResponseDictionary.StatusMessage)\n\t\tend\n\telse\n\t\treturn false, ResponseDictionary\n\tend\nend\nlocal function Initify(Root)\n\tlocal InitFile = Root:FindFirstChild("init") or Root:FindFirstChild("init.lua") or Root:FindFirstChild("init.client.lua") or Root:FindFirstChild("init.server.lua")\n\tif InitFile then\n\t\tInitFile.Name = Root.Name\n\t\tInitFile.Parent = Root.Parent\n\t\tfor _, Child in ipairs(Root:GetChildren()) do\n\t\t\tChild.Parent = InitFile\n\t\tend\n\t\tRoot:Destroy()\n\t\tRoot = InitFile\n\tend\n\tfor _, Child in ipairs(Root:GetChildren()) do\n\t\tInitify(Child)\n\tend\n\treturn Root\nend\nlocal FilesList = HttpService:JSONDecode(assert(GetAsync(\n\t"https://api.github.com/repos/howmanysmall/Janitor/contents/src",\n\t{accept = "application/vnd.github.v3+json"}\n)))\nlocal Janitor = Instance.new("Folder")\nJanitor.Name = "Janitor"\nfor _, FileData in ipairs(FilesList) do\n\tlocal ModuleScript = Instance.new("ModuleScript")\n\tModuleScript.Name = tostring(string.match(FileData.name, "(%w+)%.lua"))\n\tlocal Success, Source = GetAsync(FileData.download_url, {})\n\tif not Success then\n\t\tModuleScript.Source = string.format("-- %s", tostring(Source))\n\telse\n\t\tModuleScript.Source = tostring(Success)\n\tend\n\tModuleScript.Parent = Janitor\nend\nJanitor.Parent = ReplicatedStorage\nInitify(Janitor)\nHttpService.HttpEnabled = HttpEnabled'),(0,a.kt)("h3",{id:"method-3---manual"},"Method 3 - Manual"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/howmanysmall/Janitor/releases"},"latest release")),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("em",{parentName:"li"},"Assets"),", click ",(0,a.kt)("inlineCode",{parentName:"li"},"Janitor.rbxm")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Using ",(0,a.kt)("a",{parentName:"li",href:"https://rojo.space/"},"Rojo"),"? Put the file into your game directly."),(0,a.kt)("li",{parentName:"ul"},"Using Roblox Studio? Drag the file onto the viewport. It should insert under Workspace.")))),(0,a.kt)("h3",{id:"method-4---wally"},"Method 4 - Wally"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup ",(0,a.kt)("a",{parentName:"li",href:"https://wally.run/"},"Wally")," by using ",(0,a.kt)("inlineCode",{parentName:"li"},"wally init"),"."),(0,a.kt)("li",{parentName:"ol"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"howmanysmall/Janitor")," as a dependency.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nJanitor = "howmanysmall/janitor@^1.13.13"\n')),(0,a.kt)("h2",{id:"next"},"Next"),(0,a.kt)("p",null,"Now, check out the ",(0,a.kt)("a",{parentName:"p",href:"/api/Janitor"},"API reference"),"!"))}u.isMDXComponent=!0}}]);