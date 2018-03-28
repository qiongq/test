<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<!--new pizza-->
		</div>
		<div class="col-sm-12 col-md-4">
			<!--品种展示-->
			<h3 class="text-muted my-5">菜单</h3>
			<table class="table">
				<thead>
					<tr>
						<th>品种</th>
						<th>删除</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>榴莲pizza</td>
						<td>
							<button class="btn btn-outline-danger btn-sm">&times;</button>
						</td>
					</tr>
				</tbody>
			</table>

		</div>
	</div>
</template>
<script>
	export default{
		/*data(){
			return {
				name : 'andy'
			}
		},
		beforeRouteEnter:(to,from,next) => {   //进入页面
			//alert('hello' + this.name);
			next(vm => {
				alert('hello ' + vm.name);
			});
		},
		beforeRouteLeave:(to,from,next) => {   //离开页面
			if(confirm('你确定你要离开吗？') == true){
				next();
			}else{
				next(false);
			}
		}*/
	}
</script>